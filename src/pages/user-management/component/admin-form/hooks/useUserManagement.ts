import useSnackbar from "@clinic/hooks/useSnackbar";
import { useFormik } from "formik";
import { FormValues } from "../types";
import { INITIAL_VALUES } from "../constant";
import { validationSchema } from "../validationSchema";
import { getUserFromLocalStorage, setUserInLocalStorage } from "@clinic/utils/local-storage";
import { IUser } from "@clinic/types/user";

const useUserManagement = () => {
  const { showSnackbar } = useSnackbar();

  const add = (values:FormValues) => {
    const users:IUser[]=getUserFromLocalStorage();
    setUserInLocalStorage([...users,values]);
    showSnackbar({ message: "success" });
  };

  const formik = useFormik<FormValues>({
    initialValues: INITIAL_VALUES,
    onSubmit: (values, { resetForm }) => {
      add(values);
      resetForm();
    },
    validationSchema:validationSchema,
    validateOnMount:true
  });

  return {formik};
};

export default useUserManagement;
