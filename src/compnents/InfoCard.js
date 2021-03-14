import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

const InfoCard = () => (
    <View style={styles.container}>

        <Image
            style={styles.ımageContainer}
            source={{ uri: 'https://i.pinimg.com/originals/59/2b/5a/592b5ad7a5581e405febdc4a2636d288.jpg' }} />

        <View style={styles.childContainer}>
            <Text style={styles.textContainer}> Salon Adı / Eğitmen Adı</Text>
            <Text style={styles.textContainer}> SALON / Eğitmen iletişim-Adress</Text>
            <Text style={styles.textContainer}> Branş / TARİH-SAAT</Text>
        </View>

    </View>

)

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 20
    },
    ımageContainer: {
        width: '25%',
        height: '100%',
        borderRadius: 20
    },
    textContainer: {
        color: 'white'
    },
    childContainer: {
        left: '10%'
    }
})

export default InfoCard
