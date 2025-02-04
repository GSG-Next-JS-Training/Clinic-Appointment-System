import React from "react";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import Header from "@clinic/component/header-component";

const DoctorDashboard: React.FC = () => {
  return (
    <>
      <Header />
    </>
  );
};

const withRoutHOC = routeHOC({
  title: "doctor-dashboard",
  pageAccessName: "doctor-dashboard",
});

export default withRoutHOC(DoctorDashboard);
