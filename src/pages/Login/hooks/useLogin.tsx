import { useFormik } from "formik";
import { loginValidationSchema } from "../validationSchema";
import { FormValues } from "../types";
import useSnackbar from "@clinic/hooks/useSnackbar";
import {
  getUsersFromLocalStorage,
  setLoggedInUserInLocalStorage,
  setTokenInLocalStorage,
} from "@clinic/utils/local-storage";
import { UserRole } from "@clinic/types/user";
import { useState } from "react";
import { generateAccessToken } from "@clinic/utils";

const useLogin = () => {
  const { showSnackbar } = useSnackbar();
  const [userRole, setUserRole] = useState<UserRole>(undefined);

  const handleLogin = (values: FormValues) => {
    const existingUsers = getUsersFromLocalStorage();

    const user = existingUsers.find(
      (user: FormValues) =>
        user.email === values.email && user.password === values.password
    );

    if (user) {
      setUserRole(user.role);
      setLoggedInUserInLocalStorage(user);
      setTokenInLocalStorage(generateAccessToken());
      showSnackbar({ message: `Welcome back, ${user.name}😁!.` });
    } else {
      showSnackbar({
        message: "Invalid email or password. Please try again😊.",
        severity: "error",
      });
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
    validationSchema: loginValidationSchema,
    validateOnMount: true,
  });

  return { formik, userRole };
};

export default useLogin;
