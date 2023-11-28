import React, { createContext, useState } from "react";

export const AuthContex = createContext(undefined);


export const AuthProvider = ({children}:any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [deviceId, setDeviceId] = useState(null);

    const login = ({authToken, deviceId}:any) => {
        setUserToken(authToken);
        setDeviceId(deviceId);
        console.log(authToken)
    }


    return (
        <AuthContex.Provider value={{login, isLoading, userToken, deviceId}}>
            {children}
        </AuthContex.Provider>
    )
} 