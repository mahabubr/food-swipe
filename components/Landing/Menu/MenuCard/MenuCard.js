import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './menuCard.style'

const MenuCard = ({ item }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.image} source={{ uri: item?.strMealThumb }} />
                <View style={styles.textContent}>
                    <Text style={styles.mainText}>{item?.strMeal}</Text>
                    <Text style={styles.text}>Cat : {item?.strCategory}</Text>
                    <Text style={styles.text}>Weight : {item?.strMeasure1}</Text>
                    <Text style={styles.text}>{item?.strTags ? item?.strTags.slice(0, 15) : 'N/A'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MenuCard