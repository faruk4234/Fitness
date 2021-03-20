import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AboutScreen from './AboutSaloon'
import ActivityScreen from './ActivityScreen'
import Kapacity from './Kapacity'
import Teachers from './SalonTeachers'
import SaloonScreen from './SaloonScreen'
import TeacherFotoScreen from './TeacherFoto'
import TeacherInfo from './TeacherInfo'

const Stack = createStackNavigator()

const index = () => (
    <NavigationContainer independent>
        <Stack.Navigator initialRouteName='saloons'>
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
                name='teFotos'
                component={TeacherFotoScreen}
                options={{ headerShown: false }} />

            <Stack.Screen
                name='teInfo'
                component={TeacherInfo}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
)

export default index
