import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import BackgroundColor from '../../compnents/BackgroundImage'
import BigLogo from '../../compnents/BigLogo'

const { width, height } = Dimensions.get('window')

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('')

    const SendCode = () => {
        navigation.navigate('CheckCode')
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <BackgroundColor />

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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textContainer: {
        fontSize: 20,
        color: 'white',
        justifyContent: 'center'
    },
    childContainer1: {
        flex: 1,
        justifyContent: 'center',
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
    childContainer2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
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
