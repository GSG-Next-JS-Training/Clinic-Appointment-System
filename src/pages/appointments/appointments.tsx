import { FC, useEffect } from "react";
import Grid from "@clinic/component/grid";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import useGrid from "@clinic/hooks/useGrid";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import Container from "@mui/material/Container";
import Filtering from "@clinic/component/filtering";
import withNavbar from "@clinic/component/with-navbar/with-navbar";
import useGridConfiguration from "./hooks/useGridConfiguration";
import Loader from "@clinic/component/Loader";

const Appointments: FC = () => {
  const { init } = useGrid();
  const { rows, columns } = useGridConfiguration();

  useEffect(() => {
    init({ rows, columns });
  }, []);

  if (!rows.length) return <Loader />;

  return (
    <Box className={classes.wrapper}>
      <Container className={classes.container}>
        <Filtering />
        <Grid />
      </Container>
    </Box>
  );
};

const withRoutHOC = routeHOC({
  title: "AppointmentsDashboard",
  pageAccessName: "appointments-dashboard",
});

export default withNavbar(withRoutHOC(Appointments));
