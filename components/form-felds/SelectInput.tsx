import React, { Fragment } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { Icon } from "@iconify/react";

interface SelectInputFieldComponentProps {
  id: string;
  name: string;
  displayLabelName?: string;
  control: Control<FieldValues, object> | any;
  rules?: any;
  label: string;
  defaultValue: string;
  targetValue:string;
  options: any[];
  selectFilesProps?: SelectProps;
  displayIcon?: boolean;
  iconName?: string;
  size?: "small" | "medium";
}

const SelectInputFieldComponent = ({
  id,
  size = "small",
  name,
  options,
  control,
  rules,
  label,
  defaultValue,
  selectFilesProps,
  displayLabelName,
  targetValue,
  displayIcon = false,
  iconName,
}: SelectInputFieldComponentProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <FormControl sx={{ minWidth: "100%" }} size={size}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
              {...field}
              fullWidth={true}
              labelId={id}
              id={id}
              label={label}
              placeholder="Select Skin Type"
              {...selectFilesProps}
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option[`${targetValue}`]}>
                {displayIcon && (
                    <Icon style={{fontSize:18}} icon={option[`${iconName}`] as string} />
                  )}
                  {!displayIcon && (
                    <Fragment>{option[`${displayLabelName}`]}</Fragment>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {fieldState?.error && (
            <FormHelperText error>{fieldState.error.message}</FormHelperText>
          )}
        </>
      )}
    ></Controller>
  );
};

export default SelectInputFieldComponent;
