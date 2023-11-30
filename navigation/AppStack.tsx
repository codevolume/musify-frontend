import React, { useContext } from "react";
import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import { AuthContex } from "../context/AuthContext";

const AppStack = () => {
    const { logout }:any = useContext(AuthContex);
    return (
        <SafeAreaView>
            <Text style={{marginTop: 20,}}>Üdv, Szilveszter!</Text>
            <TouchableOpacity onPress={logout}>
                <Text style={{fontWeight: 'bold', color: 'blue'}}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default AppStack;