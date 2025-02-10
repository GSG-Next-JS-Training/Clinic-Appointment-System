import * as Yup from "yup";
import { Gender } from "./enum";

export const validationSchema = Yup.object({
    PatientName: Yup.string()
        .required("Patient Name is Required")
        .max(30, "Patient Name must be less than 30 characters"),
    Contact: Yup.string()
        .required("Contact Number is Required")
        .matches(/^\d{10}$/, "Contact must be exactly 10 digits."),
    Age: Yup.number().required("Age is Required").min(10, "Age must be more than 10"),
    Gender: Yup.string()
        .oneOf(Object.values(Gender), "Gender must be male or female.")
        .required("Gender is Required"),
    Time: Yup.string().required("Time is required."),
    Date: Yup.date().required("Date is required."),
    Symptoms: Yup.string().max(500, "Symptoms description must be less than 500 characters."),
});
