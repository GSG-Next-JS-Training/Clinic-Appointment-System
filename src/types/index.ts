import { UserRole } from "./user";

export interface DecodedToken {
  userName: string;
  role: UserRole;
}

export type WeekDays =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday";

export interface DataSetItem {
  confirmed: number;
  pending: number;
  completed: number;
  day: WeekDays;
}
