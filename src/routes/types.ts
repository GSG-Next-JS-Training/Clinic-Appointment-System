import { UserRole } from "@clinic/types/user";

export type PageAccessName =
  | "doctor-dashboard"
  | "add-booking"
  | "appointments-dashboard"
  | "test-component"
  | "forbidden-Component"
  | "unauthenticated";

export interface PageAccessRight {
  roles: UserRole[];
}

export interface RouteConfigs {
  title: string;
  pageAccessName: PageAccessName;
}
