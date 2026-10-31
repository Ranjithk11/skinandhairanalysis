"use client";
import React, { Fragment, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Container,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import SelectInputFieldComponent from "@/components/form-felds/SelectInput";
import FormMobileInput from "@/components/form-felds/phoneInput";
import { useForm } from "react-hook-form";
import { matchIsValidTel } from "mui-tel-input";
import TextInputFieldComponent from "@/components/form-felds/textInputField";
import { isValidateEmail } from "@/utils/func";
import { parsePhoneNumber } from "libphonenumber-js";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import OtpForm from "@/containers/forms/OtpForm";
import { useSendOtpMutation, useVerifyOtpMutation } from "@/redux/api/authApi";
import { useFetchLatestRecommendationsByFilterMutation } from "@/redux/api/analysisApi";

const StyledLeftSideView = styled(Box)(({ theme }) => ({
  minHeight: `calc(100dvh - 70px)`,
  height: "auto",
  position: "relative",
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
  backgroundPosition: "top",
}));
const StyledRightSideView = styled(Box)(({ theme }) => ({
  minHeight: `calc(100dvh - 70px)`,
  [theme.breakpoints.down("sm")]: {
    // minHeight: `400px`,
    // paddingTop: 50,
  },
  height: "auto",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 60%",
  backgroundPosition: "top",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& .main-title": {
    fontSize: 35,
    fontWeight: 700,
    [theme.breakpoints.only("xs")]: {
      fontSize: 25,
    },
    span: {
      color: theme.palette.primary.main,
    },
  },
  "& .MuiTypography-body1 ": {
    width: "60%",
    margin: "0px auto",
    color: theme.palette.text.secondary,
    [theme.breakpoints.only("xs")]: {
      width: "80%",
    },
  },
  "& .mobile-image": {
    width: "100%",
    height: 400,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "bottom center",
  },
}));

const HomeBannerComponent = () => {
  const router = useRouter();
  const theme = useTheme();
  const [sendTo, setSendTo] = useState<string | null>(null);
  const [sendOtp, { isLoading: isLoadingResentOtp }] = useSendOtpMutation();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      loginType: "phoneNumber",
    },
  });
  const [verifyOtp, { isLoading: isLoadingVerifyOtp }] = useVerifyOtpMutation();
  const [
    fetchLatestRecommendationsByFilter,
    { isLoading: isLoadingLatestRecByFilter },
  ] = useFetchLatestRecommendationsByFilterMutation();
  const watchChangeLoginType = watch("loginType");
  const [isGetReport, setIsGetReport] = useState<boolean>(false);
  const isXsSmDevice = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const handleRouter = () => {
    router.push(APP_ROUTES.SKIN_ANALYSIS);
  };

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

  return (
    <Grid container alignItems="stretch">
      <Grid item xs={false} sm={false} lg={4} md={4} xl={4}>
        <StyledLeftSideView
          style={{ backgroundImage: `url(/images/home_1.png)` }}
        ></StyledLeftSideView>
      </Grid>
      <Grid item xs={12} sm={12} lg={8} md={8} xl={8}>
        <StyledRightSideView
          style={{ backgroundImage: `url(/images/homeBg_1.png)` }}
        >
          {sendTo && (
            <Container maxWidth="xs">
              <OtpForm
                onClickBackButton={() => {
                  setSendTo(null);
                }}
                onClickResendOtp={handleResentOtp}
                handleSubmit={handleSubmit}
                onSubmitForm={handleOtp}
                control={control}
                sendTo={sendTo}
                isLoadinResendOtp={isLoadingResentOtp}
                isVerifyLoading={isLoadingVerifyOtp}
                watchChangeLoginType={watchChangeLoginType}
              />
            </Container>
          )}
          {!sendTo && (
            <>
              {isGetReport && (
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        className="main-title"
                        variant="h1"
                        textAlign="center"
                      >
                        Clinical / Evidence based <br />{" "}
                        <span>AI-driven Skincare Analysis Engine</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" textAlign="center">
                        India's first patent pending AI Analysis engine to
                        provide personalized recommendation, focused on holistic
                        approach to skincare, overall health and
                        mental well-being.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box mt={3}>
                    <Container maxWidth="xs">
                      <Grid container>
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
                      </Grid>
                    </Container>
                  </Box>
                </Box>
              )}
              {!isGetReport && (
                <Box>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography
                        className="main-title"
                        variant="h1"
                        textAlign="center"
                      >
                        Clinical / Evidence based <br />{" "}
                        <span>AI-driven Skincare Analysis Engine</span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" textAlign="center">
                        India's first patent pending AI Analysis engine to
                        provide personalized recommendation, focused on holistic
                        approach to skincare, overall health and
                        mental well-being.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      alignItems="center"
                      justifyContent="center"
                      container
                      xs={12}
                      spacing={3}
                      mt={2}
                    >
                      <Grid item>
                        <Button onClick={handleRouter} color="primary">
                          Start Analysis
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          color="primary"
                          onClick={() => {
                            setIsGetReport(true);
                          }}
                        >
                          Get my report
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              )}
              {isXsSmDevice && (
                <Box
                  component="div"
                  className="mobile-image"
                  sx={{ backgroundImage: `url(/images/mobile_bg.png)` }}
                ></Box>
              )}
            </>
          )}
        </StyledRightSideView>
      </Grid>
    </Grid>
  );
};

export default HomeBannerComponent;
