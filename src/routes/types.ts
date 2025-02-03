import { UserRole } from "../types/user";

export type PageAccessName =
  | "doctor-dashboard"
  | "add-booking"
  | "appointments-dashboard"
  | "test-component"
  | "Appointment-component"
  | "forbidden-Component";

export interface PageAccessRight {
  roles: UserRole[];
}

export interface RouteConfigs {
  title: string;
  pageAccessName: PageAccessName;
}
