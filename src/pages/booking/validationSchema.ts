import * as Yup from "yup";

export const validationSchema = Yup.object({
    time: Yup.string().required("Time is required."),
    date: Yup.date().required("Date is required."),
    symptoms: Yup.string().max(500, "Symptoms description must be less than 500 characters."),
});
