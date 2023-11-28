import React, {useContext} from "react";
import { View, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import { AuthContex } from "../context/AuthContext";
import AppStack from './AppStack';

const AppNav = () => {
    const {isLoading, userToken, deviceId}:any = useContext(AuthContex);

    if(isLoading) 
    {
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    }

    return (
        <NavigationContainer>
            {/* Ha volt Auth akkor Appstack, ellenben Auth */}
            {userToken  !== null && deviceId !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default AppNav;
