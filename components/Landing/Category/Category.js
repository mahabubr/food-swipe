import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'

import { burger, chicken, chips, fastFood, french, kebab, pizza, soda } from '../../../constants/icons'

import styles from './category.style'
import { useNavigation } from '@react-navigation/native'

const icons = [
    { id: 1, icon: burger },
    { id: 2, icon: chicken },
    { id: 3, icon: chips },
    { id: 4, icon: fastFood },
    { id: 5, icon: french },
    { id: 6, icon: kebab },
    { id: 7, icon: pizza },
    { id: 8, icon: soda },
]

const Category = () => {

    const route = useNavigation()

    return (
        <FlatList horizontal data={icons} keyExtractor={item => item.id} renderItem={({ item }) =>
            <TouchableOpacity onPress={() => route.navigate(`category/${item.id}`)} style={styles.container}>
                <Image style={styles.image} source={item.icon} />
            </TouchableOpacity>

        } />
    )
}

export default Category