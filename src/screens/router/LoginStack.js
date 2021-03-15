import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ForgotPassword from '../loginscreen/ForgotPassword'
import LoginScreen from '../loginscreen/LoginScreen'
import LogOrReg from '../loginscreen/LogOrReg'
import RegisterScreen from '../loginscreen/RegisterScreen'

const Stack = createStackNavigator()

const LoginStack = () => (
    <Stack.Navigator>

        <Stack.Screen
            name='LogOrReg'
            component={LogOrReg}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='Register'
            component={RegisterScreen}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{ headerShown: false }} />

    </Stack.Navigator>
)

export default LoginStack
