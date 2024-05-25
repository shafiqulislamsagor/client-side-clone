import { useContext } from 'react';
import { ContextAll } from '../routes/ContextApi';

const UseAuth = () => {
    const contextApi = useContext(ContextAll)
    return contextApi
};

export default UseAuth;