import React from "react";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import Header from "@clinic/component/header-component";
import Charts from "@clinic/component/charts";

const DoctorDashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Charts />
    </>
  );
};

const withRoutHOC = routeHOC({
  title: "doctor-dashboard",
  pageAccessName: "doctor-dashboard",
});

export default withRoutHOC(DoctorDashboard);
