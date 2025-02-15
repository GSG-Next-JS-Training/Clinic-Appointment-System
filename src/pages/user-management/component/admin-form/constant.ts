import { UserGender, UserRole } from "@clinic/types/user";
import { FormValues } from "./types";

export const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  contact: "",
  role: "Patient",
  specialty: "",
  gender: "male",
  age: 0,
  illnessLocation: "",
  report: "",
};

export const typeOptions: Exclude<UserRole, "Admin">[] = ["Doctor", "Patient"];

export const genderOptions: UserGender[] = ["male", "female"];
