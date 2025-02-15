import React from "react";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import Charts from "@clinic/component/charts";
import Header from "@clinic/component/doctor-dashboad-header";

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
