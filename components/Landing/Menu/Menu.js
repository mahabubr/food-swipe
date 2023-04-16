import { View, Text, Image, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './Menu.style'
import { reload } from '../../../constants/icons'
import MenuCard from './MenuCard/MenuCard'

const Menu = ({ search }) => {


    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [menuItems, setMenuItems] = useState([])
    useEffect(() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMenuItems(data.meals)
            })
            .catch(e => setError(e.message))
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Menu</Text>
                <Image style={styles.image} source={reload} />
            </View>
            <SafeAreaView style={styles.menuContainer}>
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
        </View>
    )
}

export default Menu