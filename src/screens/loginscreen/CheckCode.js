import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    Dimensions
} from 'react-native'

import BackgroundColor from '../../compnents/BackgroundImage'
import BigLogo from '../../compnents/BigLogo'

const { width, height } = Dimensions.get('window')

const LoginScreen = () => {
    const [email, setEmail] = React.useState('')

    const SendCode = () => {
        console.log('sendCode')
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
                    keyboardType='numeric'
                    onChangeText={setEmail}
                    value={email}
                    placeholder='CODE' />

                <View
                    style={styles.loginContainer} />
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
        alignItems: 'center',
        bottom: height * 0.12
    },
    input1: {
        width: width * 0.6,
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
    }
})

export default LoginScreen
