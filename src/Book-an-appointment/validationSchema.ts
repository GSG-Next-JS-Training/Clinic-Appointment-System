import * as Yup from "yup";
import { Gender } from "./types";

export const validationSchema = Yup.object({
    patientName: Yup.string()
        .required("Patient Name is Required")
        .max(30, "Patient Name must be less than 30 characters"),
    contact: Yup.string()
        .required("Contact Number is Required")
        .matches(/^\d{10}$/, "Contact must be exactly 10 digits."),
    age: Yup.number().required("Age is Required").min(10, "Age must be more than 10"),
    gender: Yup.string()
        .oneOf(Object.values(Gender), "Gender must be male or female.")
        .required("Gender is Required"),
    time: Yup.string().required("Time is required."),
    date: Yup.date().required("Date is required."),
    symptoms: Yup.string().max(500, "Symptoms description must be less than 500 characters."),
});
