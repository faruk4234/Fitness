import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Token } from '../../scripts/axios'
import BottomStack from './bottomStack'
import LoginStack from './LoginStack'

const Stack = createStackNavigator()

const Router = () => (
    <>
        <NavigationContainer>

            <Stack.Navigator initialRouteName={Token ? 'BottomTab' : 'LoginScreen'}>

                <Stack.Screen
                    name='LoginScreen'
                    component={LoginStack}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name='BottomTab'
                    component={BottomStack}
                    options={{ headerShown: false }} />

            </Stack.Navigator>

        </NavigationContainer>
    </>
)

export default Router
