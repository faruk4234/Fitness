import React from 'react'

import { Text, View, StyleSheet } from 'react-native'

import BigLogo from '../../compnents/BigLogo'

const LoginScreen = () => (
    <View style={styles.container}>
        <BigLogo />
        <Text> GİRİŞ YAP</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        left: '17.5%'
    }
})

export default LoginScreen
