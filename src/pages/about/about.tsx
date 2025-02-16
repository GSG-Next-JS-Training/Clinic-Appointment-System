import routeHOC from "@clinic/routes/HOCs/routeHOC";
import Hero from "./component/hero";
import ServicesSection from "./component/services-section";
import Footer from "./component/footer";
import ClinicMap from "./component/map-section";

const About = () => {
  return (
    <>
      <Hero />
      <ServicesSection />,
      <ClinicMap />
      <Footer />
    </>
  );
};

const withRoutHOC = routeHOC({
  title: "About",
  pageAccessName: "about",
});

export default withRoutHOC(About);
