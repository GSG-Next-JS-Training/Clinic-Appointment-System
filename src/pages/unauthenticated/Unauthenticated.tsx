import { FC } from "react";
import routeHOC from "../../routes/HOCs/routeHOC.js";
import ErrorComponent from "../../component/error-component";

const Unauthenticated: FC = () => {
    return (
        <ErrorComponent 
        imgPath="Unauthenticated.gif" 
        altText="Unauthenticated Error" 
        />
    );
};

const withRoutHOC = routeHOC({
    title: "forbiddenComponent",
    pageAccessName: "forbidden-Component",
});

export default withRoutHOC(Unauthenticated);