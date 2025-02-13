export interface FormValues {
  patientName: string;
  contact: string;
  age: number;
  gender: string;
  date: string;
  time: string;
  symptoms: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
}
