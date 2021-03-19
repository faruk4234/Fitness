import React from 'react'

import {
    Text, View, StyleSheet, Image, TouchableOpacity,
    Dimensions
} from 'react-native'

import BigLogo from '../../compnents/BigLogo'
import { getToken } from '../../scripts/axios'
import { picture1 } from '../../scripts/pictures'

const { width, height } = Dimensions.get('window')

const LogOrReg = ({ navigation }) => {
    const Login = () => {
        navigation.navigate('Login')
    }
    const Register = () => {
        navigation.navigate('Register')
    }

    React.useEffect(() => {
        getToken().then((value) => {
            console.log(value, 'h')
            if (value) {
                navigation.replace('BottomTab')
            }
        })
    }, [])

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
        flex: 1,
        display: 'flex'
    },
    ımageContainer: {
        width,
        height,
        position: 'absolute'

    },
    childContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        alignItems: 'center',
        marginBottom: 50
    },
    bigTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1
    },
    textcontainer: {
        color: 'white',
        fontSize: 25
    }
})

export default LogOrReg
