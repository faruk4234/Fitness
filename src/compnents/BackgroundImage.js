import React from 'react'

import {
    View, Image, StyleSheet, Dimensions
} from 'react-native'

import { picture1 } from '../scripts/pictures'

const { height, width } = Dimensions.get('window')

const BackgroundImage = () => (
    <View style={styles.container}>
        <Image
            style={styles.ımageContainer}
            source={{ uri: picture1 }} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
        position: 'absolute'
    },
    ımageContainer: {
        width,
        height,
        position: 'absolute'
    }
})
export default BackgroundImage
