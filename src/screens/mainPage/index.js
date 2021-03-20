import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Branches from './Branches'
import MainPage from './MainPage'

const Stack = createStackNavigator()

const index = () => (
    <NavigationContainer independent>
        <Stack.Navigator initialRouteName='MainPage'>

            <Stack.Screen
                name='MainPage'
                component={MainPage}
                options={{ headerShown: false }} />

            <Stack.Screen
                name='Branc'
                component={Branches}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
)

export default index
