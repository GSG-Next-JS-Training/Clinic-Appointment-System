import { useFormik } from "formik";
import { INITAIL_VALUES } from "../constant";
import { validationSchema } from "../validationSchema";
import { FormValues } from "../types";
import useSnackbar from "@clinic/hooks/useSnackbar";

const useForm = () => {
  const { showSnackbar } = useSnackbar();
  const login = (name) => {
    localStorage.set("name", name);
    showSnackbar({ message: "success" });
  };

  const formik = useFormik<FormValues>({
    initialValues: INITAIL_VALUES,
    onSubmit: (values, { resetForm }) => {
      console.log("Form data", values);
      login(values.name);
      resetForm();
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  return { formik };
};

export default useForm;
