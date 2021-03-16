import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import BigLogo from '../../compnents/BigLogo'
import { picture1 } from '../../scripts/pictures'

const { width, height } = Dimensions.get('window')

const LoginScreen = () => {
    const [passwordCheck, setPasswordCheck] = React.useState('')
    const [password, setPassword] = React.useState(null)

    const login = () => {
        console.log('login')
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
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Yeni ŞİFRE' />

                <TextInput
                    style={styles.input2}
                    onChangeText={setPasswordCheck}
                    value={passwordCheck}
                    placeholder='Yeni şifre Tekrar'
                    keyboardType='visible-password' />

                <View
                    style={styles.loginContainer}>

                    <TouchableOpacity
                        onPress={login}
                        style={styles.buttonContainer}>
                        <Text style={styles.loginButton}>
                            GİRİŞ YAP
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
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 35,
        width: width * 0.75
    },
    loginButton: {
        fontSize: 20,
        color: 'black'
    },
    scroolContainer: {
        flex: 1
    }
})

export default LoginScreen
