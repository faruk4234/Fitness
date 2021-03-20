import React from 'react'

import {
    View, TouchableOpacity, StyleSheet, Dimensions, Text
} from 'react-native'
import { Avatar } from 'react-native-paper'

const { width } = Dimensions.get('window')

const NewListCircle = ({ navigation, item }) => {
    const salon = () => {
        console.log(item)
        navigation.navigate('teInfo', item)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => salon()}>
                <Avatar.Image size={100} source={{ uri: item.image }} />
                <Text>{item.about}</Text>
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
