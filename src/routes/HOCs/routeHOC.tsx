import { ComponentType, FC } from "react";
import { RouteConfigs } from "../types";
import pageAccessRights from "../pageAccessRights";
import { Navigate } from "react-router-dom";
import {
  getLoggedInFromLocalStorage,
} from "@clinic/utils/local-storage";

const routeHOC =
  <ComponentProps extends object>(configs: RouteConfigs) =>
  (Component: ComponentType<ComponentProps>) => {
    const { title, pageAccessName } = configs;

    document.title = title;

    const WrappedComponent: FC<ComponentProps> = (props) => {
      const userRole =getLoggedInFromLocalStorage()?.role

      if (!pageAccessName) return <Component {...props} />;

      const pageAccessRight = pageAccessRights.get(pageAccessName);

      if (!pageAccessRight) return <Component {...props} />;

      const hasAccess = pageAccessRight.roles.includes(userRole);

      if (!hasAccess)
        return <Navigate to="/forbidden-component" replace={true} />;

      return <Component {...props} />;
    };

    return WrappedComponent;
  };

export default routeHOC;
