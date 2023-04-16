import { View, Text, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import styles from './item.style'
import { add, minus } from '../../../../../constants/icons'

const Item = () => {

    const { params: { itemId } } = useRoute()
    const Navigate = useNavigation()

    const [foodItem, setFoodItem] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
            .then(res => res.json())
            .then(data => setFoodItem(data.meals[0]))
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{ uri: foodItem.strMealThumb }} />
                <View style={styles.infoContent}>
                    <Text style={styles.title}>{foodItem.strMeal}</Text>
                    <Text style={styles.tags}>{foodItem.strTags}</Text>
                    <Text style={styles.ing}>{foodItem.strIngredient1} / {foodItem.strIngredient2} / {foodItem.strIngredient3}</Text>
                    <Text style={styles.cat}>{foodItem.strCategory} : {foodItem.strArea}</Text>
                    <Text style={styles.des}>{foodItem.strInstructions}</Text>
                </View>
                <View style={styles.bottomContent}>
                    <View style={styles.bottomLeft}>
                        <Image source={minus} style={styles.bottomImg} />
                        <Text>1</Text>
                        <Image source={add} style={styles.bottomImg} />
                    </View>
                    <TouchableOpacity style={styles.bottomRight}>
                        <Button onPress={() => Navigate.navigate('Orders')} title='ADD TO CART' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Item