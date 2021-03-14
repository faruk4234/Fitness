import React from 'react'

import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const Foto = () => (
    <View style={styles.Container}>
        <TouchableOpacity style={styles.opacityContainer}>
            <Image style={styles.ımageContainer} source={{ uri: 'https://blogginballz.files.wordpress.com/2016/12/kid_goku_episode_1.jpg' }} />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    Container: {
        width: '23%',
        height: '13%'
    },
    opacityContainer: {
        width: '100%',
        height: '100%'
    },
    ımageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 200
    }
})

export default Foto
