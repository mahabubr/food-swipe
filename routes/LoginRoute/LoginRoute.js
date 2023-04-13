import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ForgetPassword, Login, SignUp } from '../../screen/Login/index'
import HomeRoute from '../HomeRoute/HomeRoute'

const Stack = createNativeStackNavigator()

const LoginRoute = () => {
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{
            headerTitle: 'Food Swipe',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#576CBC',
            },
            headerTintColor: '#fff'
        }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
            <Stack.Screen name='Home' component={HomeRoute} />
        </Stack.Navigator>
    )
}

export default LoginRoute