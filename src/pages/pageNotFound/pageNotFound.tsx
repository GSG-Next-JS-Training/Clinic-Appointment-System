import { FC } from "react";
import routeHOC from "@clinic/routes/HOCs/routeHOC";
import ErrorComponent from "@clinic/component/error-component";

const pageNotFound: FC = () => {
    return (
        <ErrorComponent
            imgPath="/public/404-Error.gif"
            altText="Page Not Found"
        />
    );
};

const withRouteHOC = routeHOC({
    title: "PageNotFound",
    pageAccessName: "page-not-found",
});

export default withRouteHOC(pageNotFound);
