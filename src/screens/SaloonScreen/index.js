import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ActivityScreen from './ActivityScreen'
import SaloonScreen from './SaloonScreen'

const Stack = createStackNavigator()

const index = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='saloons'
            component={SaloonScreen}
            options={{ headerShown: false }} />

        <Stack.Screen
            name='Activty'
            component={ActivityScreen}
            options={{ headerShown: false }} />

    </Stack.Navigator>
)

export default index
