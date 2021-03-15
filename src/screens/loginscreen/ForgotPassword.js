import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native'

import BigLogo from '../../compnents/BigLogo'
import { picture1 } from '../../scripts/pictures'

const { width, height } = Dimensions.get('window')

const LoginScreen = () => {
    const [email, setEmail] = React.useState('')

    const SendCode = () => {
        console.log('sendCode')
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
                <Text style={styles.textContainer}> ŞİFREMİ UNUTTUM</Text>

                <TextInput
                    style={styles.input1}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='email' />

                <View
                    style={styles.loginContainer}>

                    <TouchableOpacity
                        onPress={SendCode}
                        style={styles.buttonContainer}>
                        <Text style={styles.loginButton}>
                            DOGRULAMA KODU GÖNDER
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
        flex: 1
    },
    textContainer: {
        fontSize: 20,
        color: 'white',
        justifyContent: 'center'
    },
    ımageContainer: {
        width,
        height,
        position: 'absolute'

    },
    childContainer1: {
        flex: 1,
        justifyContent: 'center',
        left: width * 0.175
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
    childContainer2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
        left: width * 0.04,
        bottom: height * 0.15
    },
    loginContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        borderRadius: 8,
        height: 40,
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        fontSize: 20
    }
})

export default LoginScreen
