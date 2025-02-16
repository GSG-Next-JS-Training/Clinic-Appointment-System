import React, { FC } from "react";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";
import { useField } from "formik";

type TextFieldProps = Omit<MuiTextFieldProps, "name"> & {
  name: string;
};

const ClinicTextField: FC<TextFieldProps> = ({ name, ...rest }) => {
  const [field, meta] = useField<string>(name);

  const configTextField = {
    ...field,
    ...rest,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <MuiTextField
      {...configTextField}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1A76D1",
          },
        },
      }}
    />
  );
};

export default ClinicTextField;
