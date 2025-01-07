import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import Loading from "../page/Loading";
import { Navigate } from "react-router-dom";

const PrivatePage = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    if(loading) {
        return <Loading></Loading>
    }

    if(user?.email) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivatePage;