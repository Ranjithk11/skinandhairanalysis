import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";
import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";

interface FormMobileInputProps extends MuiTelInputProps {
  name: string;
  control: Control<FieldValues, object> | any;
  rules?: any;
  country?: string;
  label?: string;
  defaultValue: string;
  size?:"small"|"medium"
  showErrorMessage?: boolean;
}

const FormMobileInput: React.FC<FormMobileInputProps> = ({
  name,
  control,
  rules,
  error,
  label,
  size,
  showErrorMessage=true,
  defaultValue,
  ...props
}) => {
  return (
    <div className="phone-input">
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, value }, fieldState }) => (
          <MuiTelInput
            flagSize="small"
            size="small"
            variant="outlined"
            style={{
              width: "100%",
            }}
            forceCallingCode
            label={label}
            defaultCountry="IN"
            focusOnSelectCountry
            InputProps={{
              fullWidth: true,
              size:size 
            }}
            classes={{}}
            value={value}
            onChange={onChange}
            error={fieldState.invalid}
            helperText={
              showErrorMessage
                ? fieldState.invalid
                  ? "Mobile number is invalid"
                  : ""
                : ""
            }
            {...props}
          />
        )}
      />
    </div>
  );
};
export default FormMobileInput;
