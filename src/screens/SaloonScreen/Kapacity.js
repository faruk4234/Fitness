import React from 'react'

import {
    Text, View, StyleSheet, Dimensions
} from 'react-native'

import BackgroundColor from '../../compnents/BackgroundImage'
import Foto from '../../compnents/Foto'
import PriceCircle from '../../compnents/PriceCircle'

const Kapacity = () => {
    const x = () => {

    }

    return (
        <View style={styles.container}>
            <BackgroundColor />
            <View style={styles.childContainer}>
                <Text style={styles.textContainer}> Merhaba xxx</Text>
                <Foto />
            </View>

            <Text style={styles.textContainer2}>XXX SALONU</Text>
            <View style={styles.childContainer2}>

                <View style={styles.groundChildContainer}>
                    <Text style={styles.textContainer}>
                        HAKKINDA
                    </Text>
                </View>

                <View style={styles.childContainer3}>
                    <PriceCircle />
                    <PriceCircle />
                    <PriceCircle />
                </View>

                <View style={styles.groundChildContainer}>
                    <Text style={styles.textContainer}>
                        Vergi No İban
                    </Text>
                </View>
                <View />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '8%',
        paddingBottom: '12%'
    },
    childContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: '10%'
    },
    childContainer2: {
        flex: 1,
        top: '5%'
    },
    childContainer3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: '8%'
    },
    groundChildContainer: {
        flex: 1,
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 70
    },
    textContainer: {
        fontSize: 25,
        color: 'white'
    },
    textContainer2: {
        fontSize: 35,
        color: 'white',
        top: '5%'
    }
})

export default Kapacity
