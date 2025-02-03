import { UserRole } from "../types/user";

export type PageAccessName =
  | "doctor-dashboard"
  | "add-booking"
  | "appointments-dashboard"
  | "test-component"
  | "Appointment-component";

export interface PageAccessRight {
  roles: UserRole[];
}

export interface RouteConfigs {
  title: string;
  pageAccessName: PageAccessName;
}
