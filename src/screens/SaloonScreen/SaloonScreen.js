import React from 'react'

import {
    View, StyleSheet, Text, ScrollView, SafeAreaView, FlatList
} from 'react-native'
import axios from 'react-native-axios'

import BackgroundColor from '../../compnents/BackgroundImage'
import Foto from '../../compnents/Foto'
import SalonComponent from '../../compnents/SaloonComponent'
import { instance } from '../../scripts/axios'

const MainPage = ({ navigation }) => {
    const Data = instance.get('/lounge/read')
        .then((response) => {
            console.log(response)
        })

    return (
        <View style={styles.container}>
            <BackgroundColor />
            <View style={styles.childContainer}>
                <Text style={styles.textContainer}> Merhaba xxx</Text>
                <Foto />
            </View>

            <View style={styles.textViewContainer}>
                <Text style={styles.textcontainer2}>TÜM SALONLAR </Text>
            </View>

            <View style={styles.childContainer2}>
                <ScrollView style={styles.scroolContainer}>
                    <View>
                        <SafeAreaView style={styles.container}>
                            <FlatList
                                numColumns={3}
                                contentContainerStyle={styles.flatContainer}
                                data={Data}
                                renderItem={() => <SalonComponent navigation={navigation} />}
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
    textcontainer2: {
        fontSize: 25,
        color: 'white'

    },
    childContainer2: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatContainer: {
        paddingVertical: 20
    },
    scroolContainer: {
    },
    textViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})

export default MainPage
