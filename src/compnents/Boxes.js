import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const Boxes = ({ props }) => {
    const boxButton = () => {
        console.log('boxbutton')
    }

    return (

        <View
            style={styles.container}>
            <TouchableOpacity onPress={boxButton}>
                <Text style={styles.textContainer}>
                    {props.names}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '23%',
        height: '13%',
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textContainer: {
        color: 'white'
    }
})

export default Boxes
