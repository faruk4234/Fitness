import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import teacherFoto from './TeacherFoto'
import teacher from './Teachers'

const Stack = createStackNavigator()

const index = () => (
    <NavigationContainer independent>
        <Stack.Navigator initialRouteName='teacher'>

            <Stack.Screen
                name='teacher'
                component={teacher}
                options={{ headerShown: false }} />

            <Stack.Screen
                name='teFotos'
                component={teacherFoto}
                options={{ headerShown: false }} />

        </Stack.Navigator>
    </NavigationContainer>
)

export default index
