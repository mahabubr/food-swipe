import { View, Text } from 'react-native'
import React from 'react'
import LandingHeader from '../../../components/Landing/LandingHeader/LandingHeader'

import styles from './landing.style'

const Landing = () => {
    return (
        <View style={styles.container}>
            <LandingHeader />
        </View>
    )
}

export default Landing