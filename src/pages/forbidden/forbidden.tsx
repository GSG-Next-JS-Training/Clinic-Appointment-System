import React from "react";
import routeHOC from "../../routes/HOCs/routeHOC";
import ErrorComponent from "../../component/error-component";
 
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