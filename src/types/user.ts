export type UserRole = "Admin" | "Doctor" | "Patient";

export type UserGender = "Male" | "Female";

export interface IUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  contact: string;
  role: Exclude<UserRole, "Admin">;
  specialty: string;
  gender: UserGender;
  birthdate: string;
  illnessLocation: string;
  report: string;
}
