import React from 'react'

import {
    Text, View, StyleSheet, Image, TouchableOpacity
} from 'react-native'

import BigLogo from '../../compnents/BigLogo'
import { picture1 } from '../../scripts/pictures'

const LogOrReg = ({ navigation }) => {
    const Login = () => {
        navigation.navigate('Login')
    }
    const Register = () => {
        navigation.navigate('Register')
    }

    return (
        <View
            style={styles.container}>

            <Image
                style={styles.ımageContainer}
                source={{ uri: picture1 }} />

            <View
                style={styles.childContainer}>

                <BigLogo />
            </View>

            <View style={styles.bigTextContainer}>

                <TouchableOpacity onPress={Login}>
                    <Text style={styles.textcontainer}> GİRİŞ YAP</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={Register}>
                    <Text style={styles.textcontainer}> /ÜYE OL</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    ımageContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute'

    },
    childContainer: {
        flex: 1,
        justifyContent: 'center',
        left: '17.5%'
    },
    bigTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '70%'
    },
    textcontainer: {
        color: 'white',
        fontSize: 25
    }
})

export default LogOrReg
