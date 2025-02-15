import { ComponentType } from "react";
import Navbar from "../navbar";

const withNavbar = <ComponentProps extends Record<string, unknown>>(
    Component: ComponentType<ComponentProps>
  ) => {
    return (props: ComponentProps) => (
      <main>
        <Navbar />
        <Component {...props} />
      </main>
    );
  };
  
export default withNavbar;
