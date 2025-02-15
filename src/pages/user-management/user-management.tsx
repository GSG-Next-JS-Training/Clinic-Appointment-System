import routeHOC from "@clinic/routes/HOCs/routeHOC";
import AdminForm from "./component/admin-form";
import Header from "./component/form-header";
import withNavbar from "@clinic/component/with-navbar";

const UserManagement: React.FC = () => {
    return (
        <>
            <Header />
            <AdminForm />
        </>
    );
};
const withRoutHOC = routeHOC({
    title: "UserManagement",
    pageAccessName: "user-management",
});

export default withNavbar(withRoutHOC(UserManagement));
