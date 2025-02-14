export type UserRole = "Admin" | "User";

export type UserGender = "male" | "female";

export type UserType = "patient" | "doctor";

export interface IUser {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    contact: string;
    role: UserType;
    specialty: string;
    gender: UserGender;
    age: number;
    illnessLocation: string;
    report: string;
}