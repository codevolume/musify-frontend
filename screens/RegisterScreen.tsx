import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import useFetch from "../hooks/useFetch";

const RegisterScreen = ({ navigation }: any) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data, isLoading, error, refetch } = useFetch({ method: 'POST', endpoint: "auth/register", query: {username: username, email: email, password: password}})

    const handleRegister =  () => {
        refetch();
        console.log(username, email, password)
        console.log(data)
    };
    return (
        <LinearGradient colors={["#000", "#111"]} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
                <View style={{ paddingHorizontal: 25 }}>
                    <InputField label={"Username"} icon={<Entypo name="mail" size={20} color={Colors.gray2} style={{ marginRight: 5 }} />} keyboardType="username" value={username} onChangeText={(text: string) => setUsername(text)} />
                    <InputField label={"Email ID"} icon={<Entypo name="mail" size={20} color={Colors.gray2} style={{ marginRight: 5 }} />} keyboardType="email-address" value={email} onChangeText={(text: string) => setEmail(text)}/>
                    <InputField label={"Password"} icon={<AntDesign name="lock" size={20} color={Colors.gray2} style={{ marginRight: 5 }} />} inputType="password" fieldButtonLabel={"Forgot?"} fieldButtonFunction={() => {}}  value={password} onChangeText={(text: string) => setPassword(text)}/>

                    <CustomButton label={"REGISZTRÁCIÓ"} onPress={handleRegister} />

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ color: "white", fontWeight: "700" }}>Bejelentkezés</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default RegisterScreen;
