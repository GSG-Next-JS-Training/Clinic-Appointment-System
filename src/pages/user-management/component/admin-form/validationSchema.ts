import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),

  contact: Yup.string()
    .required("Contact is required")
    .matches(/^[0-9]{10}$/, "Contact must be a valid 10-digit number"),

  specialty: Yup.string().when("role", {
    is: "doctor",
    then: (schema) => schema.required("Specialty is required"),
  }),

  illnessLocation: Yup.string().when("role", {
    is: "patient",
    then: (schema) => schema.required("Illness location is required"),
  }),

  birthdate: Yup.date()
    .max(new Date(), "Birthdate cannot be in the future")
    .required("Birthdate is required"),
});