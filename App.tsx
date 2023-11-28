import React from "react";

/* import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./navigation/AuthStack"; */
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";

function App() {
    return (
      <AuthProvider>
        <AppNav/>
      </AuthProvider>
    );
}

export default App;
