import { View, Text, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './categoryItems.style'
import { useRoute } from '@react-navigation/native'
import MenuCard from '../../../../components/Landing/Menu/MenuCard/MenuCard'

const CategoryItems = () => {

    const { params: { itemId } } = useRoute()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [menuItems, setMenuItems] = useState([])
    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${itemId}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMenuItems(data.meals)
            })
            .catch(e => setError(e.message))
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {
                loading ? (
                    <ActivityIndicator size='large' color='red' />
                ) : error ? (
                    <Text>Something Was Wrong !</Text>
                ) : (
                    <FlatList
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        data={menuItems}
                        renderItem={(item) => <MenuCard item={item.item} />}
                        keyExtractor={item => item.idMeal}
                    />
                )
            }
        </SafeAreaView>
    )
}

export default CategoryItems