import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './searchBar.style'

const SearchBar = ({ setSearch }) => {
    return (
        <View style={styles.container}>
            <TextInput onChangeText={(text) => setSearch(text)} style={styles.inputField} placeholder='Search Here' />
        </View>
    )
}

export default SearchBar