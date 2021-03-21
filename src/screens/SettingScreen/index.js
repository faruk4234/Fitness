import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Settings from './Setting'

const Stack = createStackNavigator()

const index = () => (
    <NavigationContainer independent>
        <Stack.Navigator initialRouteName='setting'>

            <Stack.Screen
                name='setting'
                component={Settings}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
)

export default index
