import React from 'react'

import {
    View, StyleSheet, Text
} from 'react-native'

import BackgroundColor from '../../compnents/BackgroundImage'
import Foto from '../../compnents/Foto'
import SearcBar from '../../compnents/SearchBar'

const MainPage = () => (
    <View style={styles.container}>
        <BackgroundColor />
        <View style={styles.childContainer}>
            <Text style={styles.textContainer}> Merhaba xxx</Text>
            <Foto />
        </View>

        <View style={styles.searchContainer}>
            <SearcBar />
        </View>

        <View style={styles.childContainer2}>
            <View />
            <View />
        </View>
    </View>

)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    childContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '7%',
        paddingTop: '6%'
    },
    textContainer: {
        fontSize: 27,
        color: 'white'
    },
    childContainer2: {
        flex: 4
    },
    searchContainer: {
        marginHorizontal: '6%'
    }
})

export default MainPage
