import * as React from 'react'

import { StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'

const MyComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('')

    const onChangeSearch = (query) => setSearchQuery(query)

    return (
        <Searchbar
            style={styles.container}
            placeholder='Search'
            onChangeText={onChangeSearch}
            value={searchQuery} />
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center'
    }
})
export default MyComponent
