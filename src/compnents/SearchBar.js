import * as React from 'react'

import { StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'

const MyComponent = ({ searchQuery, setSearchQuery }) => (
    <Searchbar
        style={styles.container}
        placeholder='Search'
        onChangeText={setSearchQuery}
        value={searchQuery} />
)

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default MyComponent
