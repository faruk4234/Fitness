import React from 'react'

import {
    View, StyleSheet, Text, ScrollView, SafeAreaView, FlatList
} from 'react-native'
import axios from 'react-native-axios'

import BackgroundColor from '../../compnents/BackgroundImage'
import Boxes from '../../compnents/Boxes'
import Foto from '../../compnents/Foto'
import SearcBar from '../../compnents/SearchBar'
import { getToken } from '../../scripts/axios'

const MainPage = ({ navigation }) => {
    const getData = async () => (
        axios.get('https://traidors.com/api/branch/read', {
            headers: {
                Authorization: `Bearer ${await getToken()}`
            }
        })
            .then((response) => (response.data))
            .catch((e) => {
                console.log('e', e)
            })
    )
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        getData().then((value) => {
            setData(value)
        })
    }, [])

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
                                data={data}
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
