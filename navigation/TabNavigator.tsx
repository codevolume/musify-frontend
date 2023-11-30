import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// Screens.
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import Colors from "../constants/Colors";

// Icons.
import { Octicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: {backgroundColor: '#AD40AF'}, tabBarInactiveTintColor: Colors.gray1, tabBarActiveTintColor: Colors.primary}}>
            <Tab.Screen name="home2" component={HomeStack} options={({route}):any => ({
                tabBarStyle: {
                    display: getTabBarVisibility(route),
                    backgroundColor: '#AD40AF'
                },
                tabBarIcon: ({color, size}:any) => (
                    <Octicons name="home" size={size} color={color} />
                )
            })}/>
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarBadge: 3,
                tabBarBadgeStyle: {backgroundColor: 'yellow'},
                tabBarIcon: ({color, size}) => (
                    <Octicons name="search" size={size} color={color} />
                )
            }}/>
        </Tab.Navigator>
    )
}

const getTabBarVisibility = ({route}:any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

    if ( routeName == 'GameDetails') {
        return 'none';
    }
    return 'flex';
}