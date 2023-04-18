import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import styles from './login.style'
import { loginBanner } from '../../../constants/images'
import { useNavigation } from '@react-navigation/native'
import { useSignIn } from '@clerk/clerk-expo'

const Login = () => {

    const route = useNavigation()

    const { isLoaded, setActive, signIn } = useSignIn()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignInPress = async () => {
        if (!isLoaded) {
            return
        }

        try {

            const completeSignIn = await signIn.create({
                identifier: email,
                password: password
            })

            await setActive({ session: completeSignIn.createdSessionId })

            route.navigate('Home')

        } catch (e) {
            console.log(JSON.stringify(e));
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={loginBanner} />
            <Text style={styles.mainText}>Welcome Back</Text>
            <Text style={styles.secondaryText}>Boost your ability for restaurant food</Text>
            <View style={styles.textInputContainer}>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.textInput} placeholder='Email' textContentType='emailAddress' />
                <TextInput onChangeText={(text) => setPassword(text)} style={styles.textInput} placeholder='Password' textContentType='password' secureTextEntry={true} />
                <Text onPress={() => route.navigate('ForgetPassword')} style={styles.forgetP}>Forget Password ?</Text>
                <TouchableOpacity style={styles.button}>
                    <Button onPress={onSignInPress} title='Sign In' />
                </TouchableOpacity>
            </View>
            <Text onPress={() => route.navigate('SignUp')} style={styles.secondaryText}>Don't have an Account ? Sign Up</Text>
        </View>
    )
}

export default Login