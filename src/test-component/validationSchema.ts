import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(10)
});
