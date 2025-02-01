import { PageAccessName, PageAccessRight } from "./types";

const pageAccessRights = new Map<PageAccessName, PageAccessRight>([
  [
    "doctor-dashboard",
    {
      roles: ["Admin"],
    },
  ],
  [
    "appointments-dashboard",
    {
      roles: ["Admin"],
    },
  ],
  [
    "add-booking",
    {
      roles: ["User"],
    },
  ],
]);

export default pageAccessRights;
