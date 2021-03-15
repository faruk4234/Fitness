import React from 'react'

import {
    Text, View, StyleSheet, TextInput,
    Dimensions, ScrollView
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import BackgroundImage from '../../compnents/BackgroundImage'
import SalonLogo from '../../compnents/SalonLogo'
import SmallLogo from '../../compnents/SmallLogo'

const { width, height } = Dimensions.get('window')

const RegisterScreen = () => {
    const [salonName, setSalonName] = React.useState('')
    const [adress, setAdress] = React.useState('')
    const [phone, setPhone] = React.useState(Number)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [iban, setIban] = React.useState(Number)
    const [taxNumber, setTaxNumber] = React.useState('')

    return (
        <View style={styles.container}>
            <ScrollView>
                <BackgroundImage />

                <View style={styles.childContainer}>
                    <SmallLogo />
                </View>

                <View style={styles.childContainer2}>
                    <SalonLogo />
                </View>

                <View style={styles.childContainer3}>

                    <TextInput
                        style={styles.input1}
                        onChangeText={setSalonName}
                        value={salonName}
                        placeholder='Salon Adı' />

                    <TextInput
                        style={styles.input1}
                        onChangeText={setAdress}
                        value={adress}
                        placeholder='Adress' />

                    <TextInput
                        style={styles.input1}
                        onChangeText={setPhone}
                        value={phone}
                        keyboardType='phone-pad'
                        placeholder='TEL NO' />

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

                    <TextInput
                        style={styles.input1}
                        onChangeText={setIban}
                        value={iban}
                        placeholder='İBAN' />

                    <TextInput
                        style={styles.input1}
                        onChangeText={setTaxNumber}
                        value={taxNumber}
                        placeholder='Vergi no' />

                    <TouchableOpacity
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    childContainer: {
        left: width * 0.335,
        top: height * 0.03,
        flex: 1,
        width,
        height,
        position: 'absolute'

    },
    childContainer2: {
        left: width * 0.38,
        top: height * 0.22,
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
