import React from 'react'

import {
    View, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native'
import { Avatar } from 'react-native-paper'

const { width } = Dimensions.get('window')

const NewListCircle = ({ data, navigation }) => {
    const salon = () => {
        navigation.navigate('Abaout', data = { data })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => salon(data.item)}>
                <Avatar.Image size={100} source={{ uri: data.item.image }} />
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
