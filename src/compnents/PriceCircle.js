import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

const PriceCirlcle = ({ price, navigation }) => {
    const PrirceButton = () => {
        navigation.navigate('Buy')
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
                    {price}
                </Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: width * 0.23,
        height: height * 0.12,
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
