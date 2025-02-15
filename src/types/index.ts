import { UserRole } from "./user";

export interface DecodedToken {
    userName: string;
    role: UserRole;
  }