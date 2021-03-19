import React from 'react'

import {
    View, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native'
import { Avatar } from 'react-native-paper'

const { width } = Dimensions.get('window')

const NewListCircle = ({ navigation, item }) => {
    console.log(item)
    const salon = () => {
        //  navigation.navigate('teFotos', item)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => salon()}>
                <Avatar.Image size={100} source={{ uri: item.image }} />
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
