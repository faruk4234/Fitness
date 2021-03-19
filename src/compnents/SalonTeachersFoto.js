import React from 'react'

import {
    View, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native'
import { Avatar } from 'react-native-paper'

const { width } = Dimensions.get('window')

const NewListCircle = ({ navigation, item }) => {
    const salon = () => {
        console.log(item)
        //  navigation.navigate('teFotos', item)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => salon()}>
                <View style={{
                    width: 200, height: 200, flex: 1, backgroundColor: 'red'
                }} />
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
