import React, {useEffect} from "react";
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
    user: null,
    setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(()=>{
        if(!sessionStorage.getItem("user")){
            return null
        }
        return JSON.parse(sessionStorage.getItem("user"));
    })
    useEffect(()=>{
        if(sessionStorage.getItem("user")){
            setUser(JSON.parse(sessionStorage.getItem("user")))
        }
    },[sessionStorage.getItem('user')])
    return (
        <AuthContext.Provider value={{ user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
