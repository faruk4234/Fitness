import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const PriceCirlcle = () => {
    const PrirceButton = () => {
        console.log('priceButton')
    }

    return (
        <View
            style={styles.Container}>

            <TouchableOpacity
                onPress={PrirceButton}
                style={styles.opacityContainer}>

                <Text style={styles.textContainer}>
                    AYLIK
                </Text>

                <Text style={styles.priceContainer}>
                    FİYAT
                </Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '23%',
        height: '13%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200
    },
    textContainer: {
        color: 'white',
        fontSize: 24
    },
    priceContainer: {
        fontSize: 11,
        color: 'white'
    },
    opacityContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PriceCirlcle
