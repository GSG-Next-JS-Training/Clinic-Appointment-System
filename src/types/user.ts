export type UserRole = "Admin" | "Doctor" | "Patient";

export type UserGender = "male" | "female";

export interface IUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
  role: Exclude<UserRole, "Admin">;
  specialty: string;
  gender: UserGender;
  age: number;
  illnessLocation: string;
  report: string;
}
