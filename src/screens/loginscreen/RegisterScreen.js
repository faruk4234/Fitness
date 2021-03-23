import React from 'react'

import {
    Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView,
    Dimensions
} from 'react-native'
import axios from 'react-native-axios'

import BackgroundImage from '../../compnents/BackgroundImage'
import SmallLogo from '../../compnents/SmallLogo'

const { width, height } = Dimensions.get('window')

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const Register = () => {
        axios.post('https://traidors.com/api/register', {
            name,
            email,
            password
        })
            .then(() => {
                navigation.replace('Login')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <View style={styles.kidContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <BackgroundImage />

                <View style={styles.childContainer}>
                    <SmallLogo />
                </View>

                <View style={styles.childContainer3}>

                    <TextInput
                        style={styles.input1}
                        onChangeText={setName}
                        value={name}
                        placeholder='Name' />

                    <TextInput
                        style={styles.input1}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='email' />

                    <TextInput
                        style={styles.input1}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='ŞİFRE' />

                    <TouchableOpacity
                        onPress={Register}
                        style={styles.opacityContainer}>

                        <Text
                            style={styles.textConatiner}>
                            ÜYE OL
                        </Text>

                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    kidContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    childContainer: {
        left: width * 0.335,
        top: height * 0.03,
        flex: 1,
        width,
        height,
        position: 'absolute'

    },
    childContainer3: {
        flex: 1,
        position: 'absolute',
        width: width * 0.92,
        left: width * 0.082,
        top: height * 0.38
    },
    input1: {
        width: width * 0.8,
        height: 42,
        margin: 8,
        borderWidth: 1,
        borderColor: 'white',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 15
    },
    textConatiner: {
        fontSize: 25,
        color: 'white'
    },
    opacityContainer: {
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.4,
        left: width * 0.2
    }
})

export default RegisterScreen
