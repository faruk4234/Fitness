import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import AboutScreen from './AboutSaloon'
import ActivityScreen from './ActivityScreen'
import Kapacity from './Kapacity'
import Teachers from './SalonTeachers'
import SaloonScreen from './SaloonScreen'
import TeacherFotoScreen from './TeacherFoto'

const Stack = createStackNavigator()

const index = () => (
    <Stack.Navigator initialRouteName='Abaout'>
        <Stack.Screen
            name='saloons'
            component={SaloonScreen}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='Activty'
            component={ActivityScreen}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='Abaout'
            component={AboutScreen}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='salonTeachers'
            component={Teachers}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='kapacity'
            component={Kapacity}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='teFoto'
            component={TeacherFotoScreen}
            options={{ headerShown: false }} />

    </Stack.Navigator>
)

export default index
