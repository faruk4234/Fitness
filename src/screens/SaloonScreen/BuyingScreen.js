import React from 'react'

import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input'

import BackgroundImage from '../../compnents/BackgroundImage'

const BuyingScreen = () => {
    const { value, setValue } = React.useState('')

    return (
        <View>
            <BackgroundImage />
            <Text>sdsada</Text>
            <CreditCardInput onChange={value} />
            <LiteCreditCardInput onChange={setValue} />

            <TouchableOpacity style={styles.container}>
                <Text style={styles.textContainer}>buy</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        left: '10%',
        top: '120%',
        backgroundColor: 'black',
        flex: 1,
        width: '80%',
        height: 42,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    textContainer: {
        fontSize: 25,
        color: 'white'
    }
})

export default BuyingScreen
