import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'

import BigLogo from '../../compnents/BigLogo'
import { picture1 } from '../../scripts/pictures'

const LoginScreen = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState(null)

    const login = () => {
        console.log('login')
    }

    const forgotPassword = () => {
        console.log('password forgot')
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.ımageContainer}
                source={{ uri: picture1 }} />

            <View
                style={styles.childContainer1}>

                <BigLogo />
            </View>

            <View style={styles.childContainer2}>
                <Text style={styles.textContainer}> GİRİŞ YAP</Text>

                <TextInput
                    style={styles.input1}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='email' />

                <TextInput
                    style={styles.input2}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='password'
                    keyboardType='visible-password' />

                <View
                    style={styles.loginContainer}>

                    <TouchableOpacity
                        onPress={forgotPassword}
                        style={styles.forgotPassword}>

                        <Text
                            style={styles.forgotPasswordText}>
                            Şifremi Unutum
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={login}
                        style={styles.buttonContainer}>
                        <Text style={styles.loginButton}>
                            LOGİN
                            {' '}

                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textContainer: {
        fontSize: 40,
        color: 'white',
        justifyContent: 'center'
    },
    ımageContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute'

    },
    childContainer1: {
        flex: 1,
        justifyContent: 'center',
        left: '17.5%'
    },
    input1: {
        width: '90%',
        height: 42,
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 15
    },
    input2: {
        width: '90%',
        height: 42,
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 15
    },
    forgotPasswordText: {
        fontSize: 32,
        color: 'white'
    },
    childContainer2: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        left: '4%',
        bottom: '15%'
    },
    loginContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        borderRadius: 8,
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        fontSize: 20
    },
    forgotPassword: {
        right: '30%'
    }
})

export default LoginScreen
