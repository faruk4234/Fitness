import React from 'react'

import {
    View, StyleSheet, Text, ScrollView
} from 'react-native'

import BackgroundColor from '../../compnents/BackgroundImage'
import Foto from '../../compnents/Foto'

const MainPage = ({ route }) => (
    <View style={styles.container}>
        <BackgroundColor />
        <View style={styles.childContainer}>
            <Text style={styles.textContainer}> Merhaba xxx</Text>
            <Foto />
        </View>

        <View style={styles.textViewContainer}>
            <Text style={styles.textcontainer2}>Eğitmen  </Text>
            <Text style={styles.textcontainer2}>Bilgi</Text>
        </View>

        <View style={styles.childContainer2}>
            <ScrollView style={styles.scroolContainer}>

                <Text style={styles.textcontainer3}>
                    {' '}
                    Name:
                    {' '}
                    {route.params.item.name}
                </Text>

                <Text style={styles.textcontainer3}>
                    {' '}
                    Surname:
                    {' '}
                    {route.params.item.surname}
                </Text>

                <Text style={styles.textcontainer3}>
                    {' '}
                    birthdate:
                    {' '}
                    {route.params.item.birthdate}
                </Text>

                <Text style={styles.textcontainer3}>
                    {' '}
                    email:
                    {' '}
                    {route.params.item.email}
                </Text>

                <Text style={styles.textcontainer3}>
                    {' '}
                    iban_no:
                    {' '}
                    {route.params.item.iban_no}
                </Text>

                <Text style={styles.textcontainer3}>
                    {' '}
                    description:
                    {' '}
                    {route.params.item.description}
                </Text>

                <Text style={styles.textcontainer3}>
                    {' '}
                    price:
                    {' '}
                    {route.params.item.price}
                </Text>

                <Text style={styles.textcontainer3}>
                    {' '}
                    about:
                    {' '}
                    {route.params.item.about}
                </Text>

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
    textcontainer3: {
        fontSize: 25,
        color: 'white'
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
