import { Navigate,useLocation } from "react-router-dom";
import UseAuth from '../hooks/UseAuth';



const AuthenticationPrivet = ({children}) => {
    const location = useLocation()
    const {user} = UseAuth()
    if(!user){
        return children
    }
    return <Navigate to='/' state={location.pathname} />
};

export default AuthenticationPrivet;

