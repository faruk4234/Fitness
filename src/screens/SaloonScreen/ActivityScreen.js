import React from 'react'

import {
    View, StyleSheet, Text, ScrollView, SafeAreaView, FlatList
} from 'react-native'
import axios from 'react-native-axios'

import BackgroundColor from '../../compnents/BackgroundImage'
import Foto from '../../compnents/Foto'
import NewListCircle from '../../compnents/NewListCircle'
import { getToken } from '../../scripts/axios'

const MainPage = ({ navigation }) => {
    const getActivity = async () => (
        axios.get('https://traidors.com/api/activity/read', {
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
        getActivity().then((value) => {
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

            <View style={styles.textViewContainer}>
                <Text style={styles.textcontainer2}>XXX SALONU </Text>
                <Text style={styles.textcontainer2}>Aktiviteleri</Text>
            </View>

            <View style={styles.childContainer2}>
                <ScrollView style={styles.scroolContainer}>
                    <View>
                        <SafeAreaView style={styles.container}>
                            <FlatList
                                numColumns={3}
                                contentContainerStyle={styles.flatContainer}
                                data={data}
                                renderItem={(item) => <NewListCircle item={item} navigation={navigation} />}
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
