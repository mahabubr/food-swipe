import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'

import { burger, chicken, chips, fastFood, french, kebab, pizza, soda } from '../../../constants/icons'

import styles from './category.style'
import { useNavigation } from '@react-navigation/native'

const icons = [
    { id: 'a', icon: burger },
    { id: 'c', icon: chicken },
    { id: 'e', icon: chips },
    { id: 'm', icon: fastFood },
    { id: 'v', icon: french },
    { id: 'g', icon: kebab },
    { id: 'o', icon: pizza },
    { id: 's', icon: soda },
]

const Category = () => {

    const route = useNavigation()

    return (
        <FlatList horizontal data={icons} keyExtractor={item => item.id} renderItem={({ item }) =>
            <TouchableOpacity onPress={() => route.navigate(`Category`, { itemId: item.id })} style={styles.container}>
                <Image style={styles.image} source={item.icon} />
            </TouchableOpacity>
        } />
    )
}

export default Category