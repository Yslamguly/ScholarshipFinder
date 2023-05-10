import {Navigate} from "react-router-dom";

export const PrivateRoute = ({  children }) => {
    if (!sessionStorage.getItem('user')) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
