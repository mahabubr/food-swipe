import React from 'react'
import LandingHeader from '../../../components/Landing/LandingHeader/LandingHeader'

import styles from './landing.style'
import SearchBar from '../../../components/Landing/SearchBar/SearchBar'
import { ScrollView } from 'react-native'
import Category from '../../../components/Landing/Category/Category'
import Menu from '../../../components/Landing/Menu/Menu'

const Landing = () => {
    return (
        <ScrollView style={styles.container}>
            <LandingHeader></LandingHeader>
            <SearchBar></SearchBar>
            <Category></Category>
            <Menu></Menu>
        </ScrollView>
    )
}

export default Landing