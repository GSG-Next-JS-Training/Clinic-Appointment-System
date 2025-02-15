import { APPOINTMENT_STATUS } from "@clinic/constant";

export interface FormValues {
  date: string;
  time: string;
  symptoms: string;
}

export enum Gender {
  Male = "Male",
  Female = "Female",
}

export interface IBook{
  id: string;
  name: string;
  date: string; 
  time: string;
  status: (typeof APPOINTMENT_STATUS)[keyof typeof APPOINTMENT_STATUS];
  symptoms?: string;
  doctor?: string;
  review?: string;
}