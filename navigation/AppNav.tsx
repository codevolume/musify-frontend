import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";

const AppNav = () => {
    return (
        <NavigationContainer>
            {/* <AppStack /> */}
            <AuthStack />
        </NavigationContainer>
    );
};

export default AppNav;
