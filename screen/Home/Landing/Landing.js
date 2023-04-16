import React, { useState } from 'react'
import LandingHeader from '../../../components/Landing/LandingHeader/LandingHeader'

import styles from './landing.style'
import SearchBar from '../../../components/Landing/SearchBar/SearchBar'
import { ScrollView } from 'react-native'
import Category from '../../../components/Landing/Category/Category'
import Menu from '../../../components/Landing/Menu/Menu'

const Landing = () => {

    const [search, setSearch] = useState('')

    return (
        <ScrollView style={styles.container}>
            <LandingHeader></LandingHeader>
            <SearchBar setSearch={setSearch}></SearchBar>
            <Category></Category>
            <Menu search={search}></Menu>
        </ScrollView>
    )
}

export default Landing