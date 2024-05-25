import { Navigate,useLocation } from "react-router-dom";
import UseAuth from '../hooks/UseAuth';



const Privet = ({children}) => {
    const location = useLocation()
    const {user} = UseAuth()
    if(user){
        return children
    }
    return <Navigate to='/login' state={location.pathname} />
};

export default Privet;

