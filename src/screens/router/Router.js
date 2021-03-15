import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginStack from './LoginStack'

const Stack = createStackNavigator()

const Router = () => (
    <>
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name='LoginScreen'
                    component={LoginStack}
                    options={{ headerShown: false }} />

            </Stack.Navigator>

        </NavigationContainer>
    </>
)

export default Router
