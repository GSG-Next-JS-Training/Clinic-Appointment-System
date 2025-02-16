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
  gender: "Male",
  birthdate: "",
  illnessLocation: "",
  report: "",
};

export const typeOptions: Exclude<UserRole, "Admin">[] = ["Doctor", "Patient"];

export const genderOptions: UserGender[] = ["Male", "Female"];
