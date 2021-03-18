import React from 'react'

import {
    View, StyleSheet, Text, ScrollView, SafeAreaView, FlatList
} from 'react-native'

import BackgroundColor from '../../compnents/BackgroundImage'
import Boxes from '../../compnents/Boxes'
import Foto from '../../compnents/Foto'
import SearcBar from '../../compnents/SearchBar'

const MainPage = ({ navigation }) => {
    const Data = [
        {
            id: '1',
            title: 'First Item'
        },
        {
            id: '2',
            title: 'second'
        },
        {
            id: '3',
            title: 'four'
        },
        {
            id: '4',
            title: 'five'
        },
        {
            id: '5',
            title: 'six'
        },
        {
            id: '6',
            title: 'third'
        },
        {
            id: '7',
            title: 'seven'
        },
        {
            id: '8',
            title: 'egght'
        }, {
            id: '9',
            title: 'nine'
        }

    ]

    return (
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
                <ScrollView style={styles.scroolContainer}>
                    <View>
                        <SafeAreaView style={styles.container}>
                            <FlatList
                                contentContainerStyle={styles.flatContainer}
                                numColumns={2}
                                data={Data}
                                renderItem={Boxes}
                                navigation={navigation}
                                keyExtractor={(item) => item.id} />
                        </SafeAreaView>
                    </View>
                    <View />
                </ScrollView>
            </View>

        </View>

    )
}

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
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchContainer: {
        marginHorizontal: '6%'
    },
    flatContainer: {
        paddingVertical: 20
    },
    scroolContainer: {
    }
})

export default MainPage
