"use client";
import React, { Fragment, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import FormMobileInput from "@/components/form-felds/phoneInput";
import { matchIsValidTel } from "mui-tel-input";
import { useForm } from "react-hook-form";
import SelectInputFieldComponent from "@/components/form-felds/SelectInput";
import TextInputFieldComponent from "@/components/form-felds/textInputField";
import { isValidateEmail } from "@/utils/func";
import { useVerifyOtpMutation, useSendOtpMutation } from "@/redux/api/authApi";
import { parsePhoneNumber } from "libphonenumber-js";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import OtpForm from "../forms/OtpForm";
import { grey } from "@mui/material/colors";
import { useFetchLatestRecommendationsByFilterMutation } from "@/redux/api/analysisApi";
import { APP_COLORS } from "@/theme/colors/colors";

const StyledHomeLanding = styled(Container)(({ theme }) => ({
  height: `calc(100dvh)`,
  position: "relative",
  "& .header-section": {
    height: 90,
    backgroundColor: theme.palette.primary.main,
  },

  "& .marquee_sliding": {
    height: `calc(100dvh)`,
    width: "100vw",
    position: "relative",
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundPosition: "top",
  },
  "& .overly_layer": {
    position: "absolute",
    width: "100%",
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 2,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "& .centered_box": {
    padding: 20,
    backgroundColor: theme.palette.common.white,
    width: 450,
    [theme.breakpoints.only("xs")]: {
      width: 320,
    },
    "& .MuiTypography-h5": {
      fontSize: 31,
      textAlign: "center",
      marginTop: 20,
    },
    "& .MuiTypography-body2": {
      textAlign: "center",
      fontSize: 16,
      color: theme.palette.text.secondary,
    },
  },

  "& .__marquee_slider": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: `calc(100dvh - 65px)`,
    [theme.breakpoints.only("xs")]: {
      height: "calc(100vh - 64px)",
    },
    "& .__marquee_slide": {
      height: 500,
      [theme.breakpoints.down("xs")]: {
        height: "calc(100vh - 64px)",
      },
    },
  },
  "& .__content_section": {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 55,
    zIndex: 2,
  },
  "& .__span": {
    color: theme.palette.primary.main,
  },
}));

const HomeLanding = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const theme = useTheme();
  const [sendTo, setSendTo] = useState<string | null>(null);
  const [isGetReport, setIsGetReport] = useState<boolean>(false);
  const isSmDevice = useMediaQuery(theme.breakpoints.up("lg"));
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      loginType: "phoneNumber",
    },
  });
  const [
    fetchLatestRecommendationsByFilter,
    { isLoading: isLoadingLatestRecByFilter },
  ] = useFetchLatestRecommendationsByFilterMutation();
  const [verifyOtp, { isLoading: isLoadingVerifyOtp }] = useVerifyOtpMutation();
  const [sendOtp, { isLoading: isLoadingResentOtp }] = useSendOtpMutation();
  const watchChangeLoginType = watch("loginType");

  // Submit Form
  const onSubmit = async (data: any) => {
    let input = "";
    setIsSubmitted(true);
    if (data?.loginType === "phoneNumber") {
      const mobileNumber = parsePhoneNumber(data?.phoneNumber);
      input = mobileNumber.number;
    }
    if (data?.loginType === "email") {
      input = data.email;
    }
    const response = await signIn("credentials", {
      input: input,
      redirect: false,
      actionType: "login",
      loginType: data?.loginType,
    });
    if (response) {
      setSendTo(input);
      setIsSubmitted(false);
      toast.success(
        `Your OTP has been successfully sent to your registered ${watchChangeLoginType} ${input}`
      );
    }
  };

  // handle OTP
  const handleOtp = (data: any) => {
    verifyOtp({
      input: sendTo as string,
      action: "otpVerifyLogin",
      otp: Number(data?.otp),
    })
      .then((response: any) => {
        if (response?.error?.data?.status === "failure") {
          toast.error(response?.error?.data?.message);
        } else {
          toast.success(
            "Your OTP has been successfully verified. You can now proceed with your request."
          );
          fetchLatestRecommendationsByFilter({
            input: sendTo as string,
          })
            .then((res: any) => {
              router.push(
                `${APP_ROUTES.VIEW_SKINCARE_REC_VIA_PUBLIC_URL}?userId=${res?.data?.data?.user?._id}&productRecommendationId=${res?.data?.data?.productRecommendation?._id}`
              );
            })
            .catch((error) => {
              toast.error("Something went to wrong please try again...");
            });
        }
      })
      .catch((error) => {
        toast.error("Something went to wrong please try again...");
      });
  };

  //handle resend OTP
  const handleResentOtp = () => {
    sendOtp({
      input: sendTo as string,
      inputType: watchChangeLoginType,
      action: "otpVerifyLogin",
    })
      .then((response: any) => {
        if (response?.data?.status === "success") {
          toast.success(
            `As requested, a new One-Time Password (OTP) has been sent to your registered ${watchChangeLoginType} ${sendTo}`
          );
        } else {
          toast.error("Something went to wrong please try again...");
        }
      })
      .catch((error) => {
        toast.error("Something went to wrong please try again...");
      });
  };

  // handle skip
  const handleSkip = () => {
    router.replace(`${APP_ROUTES.SKIN_ANALYSIS}`);
  };

  return (
    <StyledHomeLanding maxWidth={false} disableGutters>
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={4} lg={4} sm={5}>
          Image
        </Grid>
        <Grid item xs={12} md={8} lg={8} sm={7}>
          content
        </Grid>
      </Grid>
      <Marquee
        gradient={isSmDevice ? true : false}
        gradientColor="black"
        style={{}}
      >
        <Box
          component="div"
          className="marquee_sliding"
          sx={{ backgroundImage: `url(/images/skincare_bg.png)` }}
        ></Box>
      </Marquee>

      <Box className="overly_layer">
        <Box component="div" className="centered_box">
          {sendTo && (
            <OtpForm
              onClickBackButton={() => {
                setSendTo(null);
              }}
              onClickResendOtp={handleResentOtp}
              handleSubmit={handleSubmit}
              onSubmitForm={handleOtp}
              control={control}
              sendTo={sendTo}
              isLoadinResendOtp={
                isLoadingResentOtp || isLoadingLatestRecByFilter
              }
              isVerifyLoading={isLoadingVerifyOtp || isLoadingLatestRecByFilter}
              watchChangeLoginType={watchChangeLoginType}
            />
          )}
          {!sendTo && (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <Grid item xs={12} container alignItems="center">
                <Grid item xs></Grid>
                <Grid item>
                  {!isGetReport && (
                    <Button
                      onClick={() => {
                        setIsGetReport(true);
                      }}
                      variant="text"
                      color="primary"
                      size="small"
                      sx={{
                        borderRadius: 100,
                        marginTop: 1,
                        color: grey,
                        textDecoration: "underline",
                      }}
                    >
                      Get My Report
                    </Button>
                  )}
                  {isGetReport && (
                    <Button
                      onClick={() => {
                        setIsGetReport(false);
                      }}
                      variant="text"
                      color="inherit"
                      size="small"
                      sx={{ borderRadius: 100, marginTop: 2, color: grey }}
                    >
                      Back
                    </Button>
                  )}
                </Grid>
              </Grid>
              <Grid
                item
                mb={2}
                xs={12}
                sx={{ textAlign: "center", marginTop: 2 }}
              >
                <img
                  width={200}
                  src="/logo/beautypodlogo.png"
                  style={{
                    backgroundColor: APP_COLORS.PRIMARY_COLOR,
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography color="secondary" fontWeight={900} variant="h5">
                  Personalized <span className="__span">Skincare</span>
                </Typography>
                <Typography mb={2} variant="body2">
                  Recommendations based on analysis results.
                </Typography>
              </Grid>
              {isGetReport && (
                <Fragment>
                  <Grid item xs={2}>
                    <SelectInputFieldComponent
                      control={control}
                      id="loginType"
                      name="loginType"
                      displayIcon={true}
                      label=""
                      iconName="iconName"
                      defaultValue="phoneNumber"
                      targetValue="value"
                      size="medium"
                      options={[
                        {
                          name: "Phone",
                          value: "phoneNumber",
                          iconName: "fluent:phone-16-regular",
                        },
                        {
                          name: "Email",
                          value: "email",
                          iconName: "mdi:email-outline",
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <Box ml={1}>
                      {watchChangeLoginType === "phoneNumber" && (
                        <FormMobileInput
                          showErrorMessage={false}
                          name="phoneNumber"
                          size="medium"
                          rules={{
                            required: "This is a required field",
                            validate: matchIsValidTel,
                          }}
                          control={control}
                          defaultValue=""
                          id="form-phone-input"
                          fullWidth={true}
                        />
                      )}
                      {watchChangeLoginType === "email" && (
                        <TextInputFieldComponent
                          name="email"
                          control={control}
                          id="email"
                          label=""
                          showErrorMessage={false}
                          textFieldProps={{
                            fullWidth: true,
                            placeholder: "Enter email address",
                          }}
                          defaultValue=""
                          rules={{
                            required: "This is a required field",
                            validate: isValidateEmail,
                          }}
                        />
                      )}
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={handleSubmit(onSubmit)}
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ borderRadius: 100, marginTop: 2 }}
                      disabled={isSubmitted}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Fragment>
              )}

              {!isGetReport && (
                <Fragment>
                  <Grid item xs={12}>
                    <Button
                      onClick={() => {
                        handleSkip();
                      }}
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ borderRadius: 100, marginTop: 2 }}
                      disabled={isSubmitted}
                    >
                      Start Analysis
                    </Button>
                  </Grid>
                </Fragment>
              )}
            </Grid>
          )}
        </Box>
      </Box>   
    </StyledHomeLanding>
  );
};

export default HomeLanding;
