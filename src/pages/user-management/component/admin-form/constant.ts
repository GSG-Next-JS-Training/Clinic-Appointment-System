import { UserGender, UserType } from "@clinic/types/user";
import { FormValues } from "./types";

export const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  contact: "",
  role: "patient", 
  specialty: "",   
  gender: "male",      
  age: 0,
  illnessLocation: "",
  report: "", 
};

export const typeOptions: UserType[] = ["patient", "doctor"];  

export const genderOptions: UserGender[] = ["male", "female"];
