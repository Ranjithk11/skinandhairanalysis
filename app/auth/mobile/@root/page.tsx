"use client";
import FormMobileInput from "@/components/form-felds/phoneInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { matchIsValidTel } from "mui-tel-input";
import { useSelector } from "react-redux";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/utils/routes";
import { Container, Grid, styled } from "@mui/material";
import TextInputFieldComponent from "@/components/form-felds/textInputField";
import { isValidateEmail } from "@/utils/func";
import _ from "lodash";

const StyledLoginPage = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  height: `calc(100dvh - 65px)`,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& .__form_wrapper": {
    width: 500,
    [theme.breakpoints.only("xs")]: {
      width: 320,
    },
  },
}));

const StyledLoginRootSlotView = styled(Box)(({ theme }) => ({
  width: 500,
  [theme.breakpoints.only("xs")]: {
    width: 320,
  },
  "& .MuiTypography-h4": {
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 20,
    [theme.breakpoints.only("xs")]: {
      fontSize: 22,
    },
  },
}));

const LoginRootSlotView = () => {
  const { control, handleSubmit } = useForm();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const router = useRouter();
  const { questions } = useSelector((state: any) => state?.analysisSlice);
  const onSubmit = async (data: any) => {
    setIsSubmit(true);
    let answeredQuestions: any[] = [];
    if (questions) {
      for (const [key, value] of Object.entries(questions)) {
        answeredQuestions.push({
          questionId: key,
          responseId: [value],
        });
      }
    }
    const authResponse = await signIn("credentials", {
      phoneNumber: data?.phoneNumber,
      name: data?.name,
      email: data?.email,
      onBoardingQuestions: JSON.stringify(answeredQuestions),
      redirect: false,
    });
    if (authResponse?.error) {
      alert("Something went wrong please try again");
      setIsSubmit(false);
    } else {
      setIsSubmit(false);
      router.push(APP_ROUTES.ELEVATE);
    }
  };
  // if (_.isEmpty(questions)) {
  //   return router.push(APP_ROUTES.SKIN_ANALYSIS);
  // }
  return (
    <StyledLoginPage>
      <StyledLoginRootSlotView>
        <Typography
          color="secondary"
          fontWeight={900}
          textAlign="center"
          variant="h4"
        >
          Basic Details
        </Typography>
        <Box mt={2}>
          <Typography textAlign="center" variant="body2">
            It helps us keep your account safe.
          </Typography>
        </Box>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextInputFieldComponent
                name="name"
                control={control}
                id="name"
                label=""
                textFieldProps={{
                  fullWidth: true,
                  placeholder: "Enter name",
                }}
                defaultValue=""
                rules={{
                  required: "Name is required",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInputFieldComponent
                name="email"
                control={control}
                id="email"
                label=""
                textFieldProps={{
                  fullWidth: true,
                  placeholder: "Enter email address (optional)",
                }}
                defaultValue=""
                rules={{
                  // required: "Email is required",
                  validate: (value: string) => !value || isValidateEmail(value),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormMobileInput
                name="phoneNumber"
                size="medium"
                rules={{
                  required: true,
                  validate: matchIsValidTel,
                }}
                control={control}
                defaultValue=""
                id="form-phone-input"
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid item xs={12}>
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select {...field} className="dropdown-input">
                  <option value="">Select a Category</option>
                  <option value="Leaf Water">Leaf Water</option>
                  <option value="Forever Beauty">Forever Beauty</option>
                </select>
              )}
            />
          </Grid>
        </Box>
        <Box mt={3}>
          <Button
            disabled={isSubmit}
            onClick={handleSubmit(onSubmit)}
            endIcon={<KeyboardDoubleArrowRightIcon />}
            variant="contained"
            size="large"
          >
            Submit
          </Button>
        </Box>
      </StyledLoginRootSlotView>
    </StyledLoginPage>
  );
};

export default LoginRootSlotView;
