import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Colors from "../constants/Colors";

export default function InputField({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction, value, onChangeText }: any) {
    return (
        <View style={{ flexDirection: "row", borderColor: "#ccc", borderWidth: 1, paddingVertical: 20, paddingHorizontal: 20, borderRadius: 10, marginBottom: 25, alignItems: "center" }}>
            <View style={{ marginRight: 10 }}>{icon}</View>
            {inputType == "password" ? (
                <TextInput placeholderTextColor={"white"} placeholder={label} keyboardType={keyboardType} style={{ flex: 1, color: "white", paddingHorizontal: 0 }} secureTextEntry={true} value={value} onChangeText={onChangeText}/>
            ) : (
                <TextInput placeholderTextColor={"white"} placeholder={label} keyboardType={keyboardType} style={{ flex: 1, color: "white", paddingHorizontal: 0 }} value={value} onChangeText={onChangeText}/>
            )}
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{ color: "white", fontWeight: "700", marginLeft: 10 }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    );
}
