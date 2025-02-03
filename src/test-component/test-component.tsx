import React from "react";
import routeHOC from "../routes/HOCs/routeHOC";
import classes from "./style.module.css";
import useSnackbar from "../hooks/useSnackbar";

// eslint-disable-next-line react-refresh/only-export-components
const TestComponent: React.FC = () => {
  const { showSnackbar } = useSnackbar();

  return (
    <div className={classes.TestComponent}>
      <button
        onClick={() =>
          showSnackbar({
            message: "booking added successfully",
            severity: "error",
            variant: "outlined",
          })
        }
      >
        show Snack barr
      </button>
    </div>
  );
};

const withRoutHOC = routeHOC({
  title: "testcomponent",
  pageAccessName: "test-component",
});

export default withRoutHOC(TestComponent);
