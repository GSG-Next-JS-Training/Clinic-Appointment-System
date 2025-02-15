import useSnackbar from "@clinic/hooks/useSnackbar";
import { useFormik } from "formik";
import { FormValues } from "../types";
import { INITIAL_VALUES } from "../constant";
import { validationSchema } from "../validationSchema";
import { IUser } from "@clinic/types/user";
import { getUsersFromLocalStorage, setUsersInLocalStorage } from "@clinic/utils/local-storage";

const useUserManagement = () => {
  const { showSnackbar } = useSnackbar();

  const add = (values: FormValues) => {
    const users: IUser[] = getUsersFromLocalStorage();
    setUsersInLocalStorage([...users, values]);
    showSnackbar({ message: "The user added successfully😁" });
  };

  const formik = useFormik<FormValues>({
    initialValues: INITIAL_VALUES,
    onSubmit: (values, { resetForm }) => {
      add(values);
      resetForm();
    },
    validationSchema: validationSchema,
    validateOnMount: true,
  });

  return { formik };
};

export default useUserManagement;
