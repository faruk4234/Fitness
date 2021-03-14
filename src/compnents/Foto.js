import React from 'react'

import {
    View,
    Image,
    StyleSheet
} from 'react-native'

const Logo = () => (
    <View>
        <Image style={styles.ımageContainer} source={{ uri: 'https://blogginballz.files.wordpress.com/2016/12/kid_goku_episode_1.jpg' }} />
    </View>
)

const styles = StyleSheet.create({
    ımageContainer: {
        width: '22%',
        height: '35%',
        borderRadius: 200
    }
})

export default Logo
