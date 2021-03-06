import React from 'react'

import {
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

import { logo } from '../scripts/pictures'

const { width, height } = Dimensions.get('window')

const Logo = () => (
    <View>
        <Image style={styles.─▒mageContainer} source={{ uri: logo }} />
    </View>
)

const styles = StyleSheet.create({
    ─▒mageContainer: {
        width: width * 0.34,
        height: height * 0.18,
        borderRadius: 200
    }
})

export default Logo
