import { PageAccessName, PageAccessRight } from "./types";

const pageAccessRights = new Map<PageAccessName, PageAccessRight>([
  [
    "doctor-dashboard",
    {
      roles: ["Doctor"],
    },
  ],
  [
    "appointments-dashboard",
    {
      roles: ["Doctor"],
    },
  ],
  [
    "add-booking",
    {
      roles: ["Patient"],
    },
  ],
  [
    "user-management",
    {
      roles: ["Admin"],
    },
  ],
]);

export default pageAccessRights;
