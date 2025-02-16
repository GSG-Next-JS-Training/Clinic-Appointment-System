import { UserRole } from "@clinic/types/user";

export type PageAccessName =
  | "about"
  | "doctor-dashboard"
  | "add-booking"
  | "appointments-dashboard"
  | "test-component"
  | "forbidden-component"
  | "unauthenticated"
  | "login-component"
  | "page-not-found"
  | "user-management";

export interface PageAccessRight {
  roles: UserRole[];
}

export interface RouteConfigs {
  title: string;
  pageAccessName: PageAccessName;
}
