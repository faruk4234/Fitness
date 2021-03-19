import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

const Boxes = ({ item }) => {
    const boxButton = () => {
        console.log(item.name)
    }

    return (

        <View style={styles.viewContainer}>
            <TouchableOpacity
                style={styles.container}
                onPress={boxButton}>
                <Text style={styles.textContainer}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.23,
        height: height * 0.13,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        left: '10%'
    },
    viewContainer: {
        paddingTop: 20
    },
    textContainer: {
        color: 'white',
        fontSize: 25
    }
})

export default Boxes
