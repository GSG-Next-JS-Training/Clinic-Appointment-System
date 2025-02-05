import { useFormik } from "formik";
import { loginValidationSchema } from "../validationSchema";
import { FormValues } from "../types";
import useSnackbar from "@clinic/hooks/useSnackbar";
import { useState, useEffect } from "react";

const useLogin = () => {
  const { showSnackbar } = useSnackbar();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (existingUsers.length === 0) {
      const defaultUsers = [
        { email: "user1@example.com", password: "Password@123" },
        { email: "doctor@example.com", password: "Doctor@456" },
        { email: "patient@example.com", password: "Patient@789" },
      ];
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);

  const handleLogin = (values: FormValues) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u: FormValues) =>
        u.email === values.email && u.password === values.password
    );

    if (user) {
      setIsLoggedIn(true);
      showSnackbar({ message: `Welcome back, ${user.email}! ` });
    } else {
      showSnackbar({
        message: "Invalid email or password. Please try again.",
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

  return { formik, isLoggedIn };
};

export default useLogin;
