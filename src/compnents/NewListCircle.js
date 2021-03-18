import React from 'react'

import {
    View, TouchableOpacity, StyleSheet, Text, Dimensions
} from 'react-native'
import { Avatar } from 'react-native-paper'

import { logo } from '../scripts/pictures'

const { width, height } = Dimensions.get('window')

const NewListCircle = () => {
    console.log('TRY')
    const [click, setClick] = React.useState(false)

    const video = () => {
        console.log('video')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setClick(!click)}>
                <Avatar.Image size={100} source={{ uri: logo }} />
            </TouchableOpacity>
            { click ? (
                <View style={styles.childContainer}>

                    <TouchableOpacity
                        style={styles.opacityBar}
                        onPress={video}>

                        <Text style={styles.textConteiner1}>
                            görsel/Video
                        </Text>

                    </TouchableOpacity>

                </View>
            ) : null }
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
    },
    childContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        opacity: 0.89,
        left: width * 0.03,
        top: height * 0.12,
        borderWidth: 1
    },
    textConteiner1: {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        fontSize: 11
    }
})

export default NewListCircle
