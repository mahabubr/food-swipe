import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { profile } from '../../../constants/images'

import styles from './landingHeader.style'

const LandingHeader = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>FOOD SWIPE</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={profile} />
            </View>
        </View>
    )
}

export default LandingHeader