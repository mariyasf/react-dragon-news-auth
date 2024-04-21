import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loding)
        return <span className="loading loading-spinner loading-lg text-center"></span>

    if (user)
        return children;

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;