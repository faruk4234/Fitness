import React from 'react'

import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

const Maps = () => {
    const coordDolmabahce = {
        latitude: 41.0391683,
        longitude: 28.9982707,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.mapsContainer}
            initialRegion={coordDolmabahce}>
            <Marker coordinate={coordDolmabahce} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    mapsContainer: {
        flex: 1
    }
})

export default Maps
