import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";

export const AuthContex = createContext(undefined);


export const AuthProvider = ({children}:any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [deviceId, setDeviceId] = useState(null);

    const login = ({authToken, deviceId}:any) => {
        setUserToken(authToken);
        setDeviceId(deviceId);
    }

    const logout = async () => {
        // Kiüríti a cookie-kat.
        await AsyncStorage.removeItem("authToken");
        await AsyncStorage.removeItem("deviceId");
        setDeviceId(null);
        setUserToken(null);
    }


    return (
        <AuthContex.Provider value={{login, isLoading, userToken, deviceId, logout}}>
            {children}
        </AuthContex.Provider>
    )
} 