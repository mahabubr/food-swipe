import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './searchBar.style'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputField} placeholder='Search Here' />
        </View>
    )
}

export default SearchBar