import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Settings from './Setting'
import Type from './Type'

const Stack = createStackNavigator()

const index = ({ route }) => (

    <NavigationContainer independent>
        <Stack.Navigator initialRouteName='setting' navigation>

            <Stack.Screen
                name='setting'
                component={() => <Settings navigation={route.navigation} />}
                options={{ headerShown: false }} />

            <Stack.Screen
                name='Type'
                component={Type}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
)
export default index
