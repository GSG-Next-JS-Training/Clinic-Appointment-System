import React from "react";
import ErrorComponent from "@clinic/component/error-component";
import routeHOC from "@clinic/routes/HOCs/routeHOC";

const ForbiddenComponent: React.FC = () => {
  return (
    <ErrorComponent 
    imgPath="403-Error-Forbidden.gif" 
    altText="Forbidden Error" 
    />
  );
};

const withRoutHOC = routeHOC({
  title: "forbiddenComponent",
  pageAccessName: "forbidden-Component",
});

export default withRoutHOC(ForbiddenComponent);