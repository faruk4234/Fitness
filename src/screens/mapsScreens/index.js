import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Maps from './Maps'

const Stack = createStackNavigator()

const index = () => (
    <NavigationContainer independent>
        <Stack.Navigator initialRouteName='MainPage'>

            <Stack.Screen
                name='Maps'
                component={Maps}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
)

export default index
