import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './login.style'
import { loginBanner } from '../../../constants/images'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const route = useNavigation()

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={loginBanner} />
            <Text style={styles.mainText}>Welcome Back</Text>
            <Text style={styles.secondaryText}>Boost your ability for restaurant food</Text>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder='Email' textContentType='emailAddress' />
                <TextInput style={styles.textInput} placeholder='Password' textContentType='password' secureTextEntry={true} />
                <Text onPress={() => route.navigate('ForgetPassword')} style={styles.forgetP}>Forget Password ?</Text>
                <TouchableOpacity style={styles.button}>
                    <Button onPress={() => route.navigate('Home')} title='Sign In' />
                </TouchableOpacity>
            </View>
            <Text onPress={() => route.navigate('SignUp')} style={styles.secondaryText}>Don't have an Account ? Sign Up</Text>
        </View>
    )
}

export default Login