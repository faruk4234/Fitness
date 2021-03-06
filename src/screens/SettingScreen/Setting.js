import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import BackgroundImage from '../../compnents/BackgroundImage'
import ChangePasswordBox from '../../compnents/PasswordChangeBox'
import TypeBox from '../../compnents/TypeBox'

const Setting = ({ navigation }) => {
    const out = () => {
        AsyncStorage.removeItem('@storage_Key')
        navigation.replace('LoginScreen')
    }

    return (
        <View style={styles.container}>
            <BackgroundImage />
            <TouchableOpacity
                onPress={out}
                style={styles.childContainer}>
                <Text style={styles.textContainer}>Çıkış</Text>
            </TouchableOpacity>
            <View style={styles.childContainer2} />
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
    },
    childContainer2: {
        flexDirection: 'row',
        flex: 1,
        top: '10%'
    }
})

export default Setting
