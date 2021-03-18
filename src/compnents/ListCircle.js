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

const ListCircle = ({ item }) => {
    const [click, setClick] = React.useState(false)

    const Vıdeo = () => {
        console.log('görsel ve vidolar')
    }

    return (
        <View style={styles.Container}>
            <Text>
                {' '}
            </Text>
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
                        onPress={Vıdeo}>

                        <Text style={styles.textConteiner1}>
                            görsel/Video
                        </Text>

                    </TouchableOpacity>

                </View>
            ) : null }

        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        width: width * 0.22,
        height: height * 0.12
    },
    ımageContainer: {
        width: width * 0.22,
        height: height * 0.12,
        borderRadius: 200
    },
    ıconContainer: {
        color: 'white',
        fontSize: 24,
        position: 'absolute',
        top: height * 0.10,
        left: '36%'
    },
    childContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '88%',
        opacity: 0.89,
        left: '6%',
        top: '110%',
        borderWidth: 1
    },
    textConteiner1: {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        fontSize: 11
    }
})

export default ListCircle
