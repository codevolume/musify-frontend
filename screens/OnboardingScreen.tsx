import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import CustomButton from "../components/CustomButton";

const OnboardingScreen = ({ navigation }: any) => {
    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', gap: -50, position: 'absolute',}}>
                    <Image source={require('../assets/musify.png')} style={{width: 100, resizeMode: 'contain'}}/>
                    <Text style={{ fontWeight: "bold", fontSize: 72, color: 'white' }}>MUSIFY</Text>
                </View>
                <View style={{paddingHorizontal: 20, width: '100%', position: 'absolute', bottom: 30,}}>
                    <CustomButton label={"Bejelentkezés"} primary={true} onPress={() => navigation.navigate('Login')}/>
                    <CustomButton label={"Regisztráció"} primary={false} onPress={() => navigation.navigate('Register')}/>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default OnboardingScreen;
