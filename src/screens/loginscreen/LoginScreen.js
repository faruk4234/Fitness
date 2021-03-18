import React from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import axios from 'react-native-axios'
import { ScrollView } from 'react-native-gesture-handler'

import BigLogo from '../../compnents/BigLogo'
import { Token } from '../../scripts/axios'
import { picture1 } from '../../scripts/pictures'

const { width, height } = Dimensions.get('window')

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState(null)

    const login = () => {
        axios.post('https://traidors.com/api/login', {
            email,
            password
        })
            .then((response) => {
                AsyncStorage.setItem('@storage_Key', response)
                navigation.replace('BottomTab')
                Token = response
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const forgotPassword = () => {
        navigation.navigate('ForgotPassword')
    }

    return (
        <ScrollView contentContainerStyle={styles.scroolContainer}>
            <Image
                style={styles.ımageContainer}
                source={{ uri: picture1 }} />

            <View style={styles.childContainer2}>

                <View
                    style={styles.childContainer1}>

                    <BigLogo />
                </View>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        fontSize: 40,
        color: 'white',
        justifyContent: 'center'
    },
    ımageContainer: {
        width,
        height,
        position: 'absolute'

    },
    childContainer1: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    input1: {
        width: width * 0.9,
        height: 42,
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 15
    },
    input2: {
        width: width * 0.9,
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
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
        left: width * 0.04,
        bottom: height * 0.10
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
        right: width * 0.04
    },
    scroolContainer: {
        flex: 1
    }
})

export default LoginScreen
