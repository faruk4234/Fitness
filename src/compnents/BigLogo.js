import React from 'react'

import {
    View,
    Image,
    StyleSheet
} from 'react-native'

import { logo } from '../scripts/pictures'

const Logo = () => (
    <View>
        <Image style={styles.ımageContainer} source={{ uri: logo }} />
    </View>
)

const styles = StyleSheet.create({
    ımageContainer: {
        width: '65%',
        height: '60%',
        borderRadius: 200
    }
})

export default Logo
