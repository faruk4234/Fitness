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
                source={{ uri: 'https://blogginballz.files.wordpress.com/2016/12/kid_goku_episode_1.jpg' }} />

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
