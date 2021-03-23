import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Branches from './Branches'
import MainPage from './MainPage'
import teFotos from './TeacherPrifle'

const Stack = createStackNavigator()

const index = ({ route }) => {
    console.log('here:', route.navigation)

    return (
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

                <Stack.Screen
                    name='teFotos'
                    component={teFotos}
                    options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default index
