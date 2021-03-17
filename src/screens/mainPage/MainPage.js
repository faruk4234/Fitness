import React from 'react'

import {
    View, StyleSheet, Text
} from 'react-native'

import Foto from '../../compnents/Foto'
import SearcBar from '../../compnents/SearchBar'

const MainPage = () => (
    <View>
        <View style={styles.childContainer}>
            <Text> Merhaba xxx</Text>
            <Foto />
        </View>
        <SearcBar />
    </View>

)

const styles = StyleSheet.create({
    childContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '7%'
    }
})

export default MainPage
