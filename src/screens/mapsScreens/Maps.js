import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import axios from 'react-native-axios'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

import { getToken } from '../../scripts/axios'

const Maps = () => {
    const coordDolmabahce = {
        latitude: 41.0391683,
        longitude: 28.9982707,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }

    const getData = async () => (
        axios.get('https://traidors.com/api/region/read', {
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
        <View style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapsContainer}
                initialRegion={coordDolmabahce}>
                <Marker coordinate={coordDolmabahce} />

            </MapView>
            <TouchableOpacity onPress={console.log(data)}>
                <Text>YARRRAAAA</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mapsContainer: {
        flex: 1
    }
})

export default Maps
