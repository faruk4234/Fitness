import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import BackgroundImage from '../../compnents/BackgroundImage'

const Setting = ({ route }) => {
    const out = () => {
        AsyncStorage.removeItem('@storage_Key')
        route.navigation.navigate('LoginScreen')
    }

    return (
        <View style={styles.container}>
            <BackgroundImage />
            <TouchableOpacity
                onPress={out}
                style={styles.childContainer}>
                <Text style={styles.textContainer}>Çıkış</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    childContainer: {
        backgroundColor: 'red',
        width: '80%',
        height: 52,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        left: '10%',
        top: 15
    },
    textContainer: {
        color: 'white',
        fontSize: 25
    }
})

export default Setting
