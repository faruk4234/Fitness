import React from 'react'

import {
    View, StyleSheet, Text, ScrollView, SafeAreaView, FlatList
} from 'react-native'
import axios from 'react-native-axios'
import { Checkbox } from 'react-native-paper'

import BackgroundColor from '../../compnents/BackgroundImage'
import Foto from '../../compnents/Foto'
import TeacherComponent from '../../compnents/TeacherComponent'
import { getToken, getName } from '../../scripts/axios'

const MainPage = ({ navigation }) => {
    const getData = async () => (
        axios.get('https://traidors.com/api/teacher/read', {
            headers: {
                Authorization: `Bearer ${await getToken()}`
            }
        })
            .then((response) => (response.data))
            .catch((e) => {
                console.log('e', e)
            })
    )

    const getStudent = async () => (
        axios.get('https://traidors.com/api/student/read', {
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
            getStudent().then((student) => {
                setData([...student, ...value])
            })
        })
    }, [])

    const [student, setStudent] = React.useState(false)
    const [teacher, setTeacher] = React.useState(false)

    return (
        <View style={styles.container}>
            <BackgroundColor />
            <View style={styles.childContainer}>
                <Text style={styles.textContainer}>
                    {' '}
                    Merhaba
                    {' '}
                    {getName}
                </Text>
                <Foto />

            </View>
            <View style={styles.checkBox}>

                <Checkbox
                    status={student ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setStudent(!student)
                    }} />

                <Text style={styles.checkBoxText}>Ögrenciler</Text>
            </View>

            <View style={styles.checkBox}>
                <Checkbox
                    status={teacher ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setTeacher(!teacher)
                    }} />
                <Text style={styles.checkBoxText}>Ögretmenler</Text>
            </View>

            <View style={styles.textViewContainer}>
                <Text style={styles.textcontainer2}>TÜM </Text>
                <Text style={styles.textcontainer2}>Eğitmenler ve Ögrenciler</Text>
            </View>

            <View style={styles.childContainer2}>
                <ScrollView style={styles.scroolContainer}>
                    <View>
                        <SafeAreaView style={styles.container}>
                            <FlatList
                                numColumns={3}
                                contentContainerStyle={styles.flatContainer}
                                data={data}
                                renderItem={(item) => <TeacherComponent navigation={navigation} item={item} />}
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
    },
    checkBoxText: {
        color: 'white',
        fontSize: 20,
        top: 3
    },
    checkBox: {
        flexDirection: 'row'
    }
})

export default MainPage
