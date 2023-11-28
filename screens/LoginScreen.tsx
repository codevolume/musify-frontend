import React, { useContext } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import CookieManager from "@react-native-cookies/cookies";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import Colors from "../constants/Colors";
import useFetch from "../hooks/useFetch";

const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data, isLoading, error, refetch }: any = useFetch({ method: "POST", endpoint: "auth/login", query: { username: email, password: password } });

    const handleLogin = async () => {
        try {
            // Ha van törli az authToken és a deviceId cookie-t.
            await AsyncStorage.removeItem("authToken");
            await AsyncStorage.removeItem("deviceId");

            await refetch();

            if (data.data.status !== "done") {
                console.log("Sikertelen bejelentkezés. ", data.data.message);
            } else {
                const setCookieHeader = data.headers["set-cookie"][0];

                if (setCookieHeader) {
                    const cookiesArray = setCookieHeader.split("; ");
                    const authTokenValue = cookiesArray[0].split("=")[1];
                    const deviceIdValue = cookiesArray[5].split(", ")[1].split("=")[1];

                    console.log(authTokenValue, deviceIdValue)


                    if (authTokenValue && deviceIdValue) {
                        await AsyncStorage.setItem("authToken", authTokenValue);
                        await AsyncStorage.setItem("deviceId", deviceIdValue);

                        console.log("Autentikációs Token elmentve: ", authTokenValue);
                        console.log("Device ID  elmentve: ", deviceIdValue);
                    }
                } else {
                    console.error("A szükséges cookie-k nincsenek jelen a válaszban.");
                }
                console.log("Sikeres bejelentkezés!");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <LinearGradient colors={["#000", "#111"]} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ paddingHorizontal: 25 }}>
                    <InputField label={"Email ID"} icon={<Entypo name="mail" size={20} color={Colors.gray2} style={{ marginRight: 5 }} />} keyboardType="email-address" value={email} onChangeText={(text: string) => setEmail(text)} />
                    <InputField label={"Password"} icon={<AntDesign name="lock" size={20} color={Colors.gray2} style={{ marginRight: 5 }} />} inputType="password" fieldButtonLabel={"Forgot?"} fieldButtonFunction={() => {}} value={password} onChangeText={(text: string) => setPassword(text)} />

                    <CustomButton label={"BELÉPÉS"} onPress={handleLogin} />

                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ color: "white", fontWeight: "700" }}>Regisztráció</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default LoginScreen;
