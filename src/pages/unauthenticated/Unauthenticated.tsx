import { FC } from "react";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import ErrorComponent from "@clinic/component/error-component";

const Unauthenticated: FC = () => {
    return (
        <ErrorComponent 
        imgPath="Unauthenticated.gif" 
        altText="Unauthenticated Error" 
        />
    );
};

const withRoutHOC = routeHOC({
    title: "Unauthenticated",
    pageAccessName: "unauthenticated",
});

export default withRoutHOC(Unauthenticated);