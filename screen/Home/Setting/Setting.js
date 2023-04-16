import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './setting.style'
import { profile } from '../../../constants/images'

const Setting = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.userInfo}>
                <Image style={styles.img} source={profile} />
                <View >
                    <Text style={styles.userTxt}>Tony Stark</Text>
                    <Text style={styles.userTxt1}>tony@stark.com</Text>
                </View>
            </View>
            <View style={styles.settingInfo}>
                <TouchableOpacity>
                    <Text style={styles.userTxt2}>Version 1.1.0.1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.userTxt2}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.userTxt2}>Terms and Condition</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.settingInfo}>
                <TouchableOpacity>
                    <Text style={styles.userTxt2}>Change Email</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.userTxt2}>Change Phone Number</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.userTxt2}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.userTxt2}>Change Photo</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Setting