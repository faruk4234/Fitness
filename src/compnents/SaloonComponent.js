import React from 'react'

import {
    View, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native'
import { Avatar } from 'react-native-paper'

import { logo } from '../scripts/pictures'

const { width } = Dimensions.get('window')

const NewListCircle = () => {
    const salon = () => {
        console.log('video')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={salon}>
                <Avatar.Image size={100} source={{ uri: logo }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.25,
        padding: 15,
        marginHorizontal: 10
    }

})

export default NewListCircle
