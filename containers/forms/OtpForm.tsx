import TextInputFieldComponent from "@/components/form-felds/textInputField";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Control, FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { useForm } from "react-hook-form";

interface OtpFormProps {
  control: Control<FieldValues, object> | any;
  watchChangeLoginType: string;
  sendTo: string;
  onClickBackButton: () => void;
  onClickResendOtp: () => void;
  onSubmitForm: (data: any) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  isVerifyLoading?: boolean;
  isLoadinResendOtp?: boolean;
}

const OtpForm = ({
  control,
  watchChangeLoginType,
  sendTo,
  onClickBackButton,
  onClickResendOtp,
  handleSubmit,
  onSubmitForm,
  isVerifyLoading,
  isLoadinResendOtp,
}: OtpFormProps) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <Grid item xs={12}>
        <Typography fontWeight={700} textAlign="center" variant="h6">
          Enter Verification Code
        </Typography>
        <Typography sx={{ fontSize: 12 }} textAlign="center" variant="body2">
          We have send an OTP on given {watchChangeLoginType}
          <b> {sendTo}</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextInputFieldComponent
          name="otp"
          control={control}
          id="otp"
          label=""
          showErrorMessage={true}
          textFieldProps={{
            fullWidth: true,
            placeholder: "Enter a otp",
            type: "number",
          }}
          defaultValue=""
          rules={{
            required: "Please enter a valid otp",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="text"
          disabled={isLoadinResendOtp}
          onClick={onClickResendOtp}
        >
          Resent OTP
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={onClickBackButton}
          variant="contained"
          color="inherit"
          size="large"
          sx={{ borderRadius: 100, marginTop: 2 }}
          disabled={false}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={handleSubmit(onSubmitForm)}
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: 100, marginTop: 2 }}
          disabled={isVerifyLoading}
        >
          Verify
        </Button>
      </Grid>
    </Grid>
  );
};

export default OtpForm;
