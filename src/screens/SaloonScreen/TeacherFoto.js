import React from 'react'

import {
    View, StyleSheet, Text, ScrollView, SafeAreaView, FlatList
} from 'react-native'

import BackgroundColor from '../../compnents/BackgroundImage'
import Foto from '../../compnents/Foto'
import SalonTeacherFoto from '../../compnents/SalonTeachersFoto'

const MainPage = ({ navigation, item }) => (
    <View style={styles.container}>
        <BackgroundColor />
        <View style={styles.childContainer}>
            <Text style={styles.textContainer}> Merhaba xxx</Text>
            <Foto />
        </View>

        <View style={styles.textViewContainer}>
            <Text style={styles.textcontainer2}>Eğitmen  </Text>
            <Text style={styles.textcontainer2}>FOTOLAR</Text>
        </View>

        <View style={styles.childContainer2}>
            <ScrollView style={styles.scroolContainer}>
                <View>
                    <SafeAreaView style={styles.container}>
                        <FlatList
                            numColumns={3}
                            contentContainerStyle={styles.flatContainer}
                            data={item}
                            renderItem={(item) => <SalonTeacherFoto navigation={navigation} item={item} />}
                            keyExtractor={(item) => item.id} />
                    </SafeAreaView>
                </View>
                <View />
            </ScrollView>
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
