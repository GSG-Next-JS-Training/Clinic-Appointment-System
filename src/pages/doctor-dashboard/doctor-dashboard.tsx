import React from "react";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import HeaderComponent from "@clinic/component/header-component";

const DoctorDashboard: React.FC = () => {
  return (
    <>
      <HeaderComponent />
    </>
  );
};

const withRoutHOC = routeHOC({
  title: "doctor-dashboard",
  pageAccessName: "doctor-dashboard",
});

export default withRoutHOC(DoctorDashboard);
