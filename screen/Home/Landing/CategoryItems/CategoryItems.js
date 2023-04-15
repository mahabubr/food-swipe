import { View, Text } from 'react-native'
import React from 'react'

import styles from './categoryItems.style'
import { useRoute } from '@react-navigation/native'

const CategoryItems = () => {

    const { params: { itemId } } = useRoute()

    return (
        <View>
            <Text>{itemId}</Text>
        </View>
    )
}

export default CategoryItems