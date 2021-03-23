import React from 'react'

import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')

const Foto = () => {
    const [click, setClick] = React.useState(false)

    const Profilim = () => {
        console.log('profilim')
    }

    const Ayarlar = () => {
        console.log('ayarlar')
    }

    return (
        <View style={styles.Container}>

            <Image
                style={styles.ımageContainer}
                source={{ uri: 'data:image/jpeg;base64,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' }} />

            <Icon
                style={styles.ıconContainer}
                onPress={() => setClick(!click)}
                name={click
                    ? 'caret-down-outline'
                    : 'caret-up-outline'} />

            { click ? (
                <View style={styles.childContainer}>

                    <TouchableOpacity
                        style={styles.opacityBar}
                        onPress={Profilim}>

                        <Text style={styles.textConteiner1}>
                            Profilim
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.opacityBar}
                        onPress={Ayarlar}>

                        <Text style={styles.textConteiner2}>
                            Ayarlar
                        </Text>

                    </TouchableOpacity>

                </View>
            ) : null }

        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        width: width * 0.25,
        height: height * 0.13
    },
    ımageContainer: {
        width: width * 0.25,
        height: height * 0.13,
        borderRadius: 200
    },
    ıconContainer: {
        color: 'white',
        fontSize: 24,
        position: 'absolute',
        top: height * 0.09,
        left: width * 0.09
    },
    childContainer: {
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: width * 0.18,
        opacity: 0.89,
        left: width * 0.04,
        top: height * 0.15
    },
    textConteiner1: {
        color: 'white',
        borderBottomWidth: 0.6,
        borderBottomColor: 'white'
    },
    textConteiner2: {
        color: 'white'
    }
})

export default Foto
