import React from "react";
import routeHOC from "../routes/HOCs/routeHOC";
import classes from "./style.module.css";

// eslint-disable-next-line react-refresh/only-export-components
const TestComponent: React.FC = () => {
  return <div className={classes.TestComponent}>test-component</div>;
};

const withRoutHOC = routeHOC({
  title: "testcomponent",
  pageAccessName: "test-component",
});

export default withRoutHOC(TestComponent);
