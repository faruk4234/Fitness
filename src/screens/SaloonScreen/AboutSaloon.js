import React from 'react'

import {
    Text, View, StyleSheet, Dimensions
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import BackgroundImage from '../../compnents/BackgroundImage'

const AboutSaloon = ({ navigation, route }) => {
    const { item } = route.params.data
    const Kapacity = () => {
        navigation.navigate('kapacity', item)
    }

    const teachers = () => {
        navigation.navigate('salonTeachers', item)
    }

    const Activity = () => {
        navigation.navigate('Activty')
    }

    return (
        <View style={styles.container}>
            <BackgroundImage />
            <Text style={styles.textContainer}>
                {item.name}
                {' '}
                SALONU
            </Text>

            <TouchableOpacity
                onPress={Kapacity}
                style={styles.opacityContainer}>
                <Text style={styles.textContainer2}>KAPASİTESİ</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={Activity}
                style={styles.opacityContainer}>
                <Text style={styles.textContainer2}>Aktivitiler</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={teachers}
                style={styles.opacityContainer}>
                <Text style={styles.textContainer2}>EĞİTMENLER</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.opacityContainer}>
                <Text style={styles.textContainer2}>{item.work_time}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.opacityContainer}>
                <Text style={styles.textContainer2}>{item.contact}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.opacityContainer}>
                <Text style={styles.textContainer2}>ADRESS</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '35%'
    },
    textContainer: {
        fontSize: 30,
        color: 'white'

    },
    textContainer2: {
        fontSize: 25,
        color: 'white'
    },
    opacityContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: Dimensions.get('window').width * 0.80,
        height: 42,
        borderRadius: 50
    }
})
export default AboutSaloon
