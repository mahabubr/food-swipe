import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History, Landing, Orders, Setting } from '../../screen/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();


const HomeRoute = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#576CBC',
                height: 70,
            },
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#7286D3'
        }}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
                name="Landing" component={Landing} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="history" color={color} size={size} />
                    ),
                }}
                name="History" component={History} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={size} />
                    ),
                }}
                name="Orders" component={Orders} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={size} />
                    ),
                }}
                name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}

export default HomeRoute