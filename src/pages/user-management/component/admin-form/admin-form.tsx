import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Form, FormikProvider } from "formik";
import ClinicTextField from "@clinic/component/text-field";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";
import { VisuallyHiddenInput } from "./utils";
import { genderOptions, typeOptions } from "./constant";
import useUserManagement from "./hooks/useUserManagement";
import useFileUpload from "./hooks/useFileUpload";
import classes from "./style.module.css";

const AdminForm: React.FC = () => {
  const { formik } = useUserManagement();
  const { uploaded, base64Data, handleFileChange } = useFileUpload();

  useEffect(() => {
    if (base64Data) {
      formik.setFieldValue("report", base64Data);
    }
  }, [base64Data]);

  return (
    <>
      <FormikProvider value={formik}>
        <Form className={classes.formGrid}>
          <ClinicTextField label="Name" name="name" />
          <ClinicTextField label="Email" name="email" />
          <ClinicTextField
            type="date"
            label="Birthdate"
            name="Birthdate"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <ClinicTextField label="Contact" name="contact" />
          <ClinicTextField type="password" label="Password" name="password" />
          <ClinicTextField
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />
          <FormControl
            className={classes.formControl}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3498db",
                },
              },
            }}
          >
            <InputLabel>Role</InputLabel>
            <Select {...formik.getFieldProps("role")}>
              {typeOptions.map((role) => (
                <MenuItem key={role} value={role}>
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {formik.values.role === "doctor" && (
            <ClinicTextField label="Specialty" name="specialty" />
          )}
          {formik.values.role === "patient" && (
            <>
              <Button
                component="label"
                startIcon={uploaded ? <CheckCircleIcon /> : <CloudUploadIcon />}
                sx={{
                  padding: "10px 10px ",
                  color: "white",
                  borderRadius: "15px",
                  backgroundColor: "#87BFF7",
                  border: "2px solid #ffffff",
                  transition: "0.3 ease all",
                  "&:hover": {
                    backgroundColor: "white",
                    border: "2px solid #87BFF7",
                    color: "#87BFF7",
                  },
                }}
              >
                {uploaded ? "Uploaded!" : "Upload Report"}{" "}
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
              </Button>
              <ClinicTextField
                label="Illness Location"
                name="illnessLocation"
              />
            </>
          )}
          <FormControl
            component="fieldset"
            sx={{
              marginTop: formik.values.role === "doctor" ? "-15px" : "0px",
            }}
          >
            <FormGroup
              row
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <FormLabel component="legend" sx={{ marginRight: "10px" }}>
                Gender
              </FormLabel>
              {genderOptions.map((gender) => (
                <FormControlLabel
                  key={gender}
                  control={
                    <Radio
                      checked={formik.values.gender === gender}
                      onChange={() => formik.setFieldValue("gender", gender)}
                    />
                  }
                  label={gender.charAt(0).toUpperCase() + gender.slice(1)}
                />
              ))}
            </FormGroup>
          </FormControl>
          <Button
            type="submit"
            className={classes.submitButton}
            sx={{
              gridColumn: "span 2",
              padding: "10px 0 ",
              color: "white",
              borderRadius: "15px",
              backgroundColor: "#87BFF7",
              border: "2px solid #ffffff",
              transition: "0.3 ease all",
              "&:hover": {
                backgroundColor: "white",
                border: "2px solid #87BFF7",
                color: "#87BFF7",
              },
            }}
          >
            Save User
          </Button>
        </Form>
      </FormikProvider>
    </>
  );
};

export default AdminForm;
