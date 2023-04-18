import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { CLERK_PUBLISHABLE_KEY } from '@env'

import styles from './signUp.style'
import { signupBanner } from '../../../constants/images'
import { useNavigation } from '@react-navigation/native'
import { useSignUp } from '@clerk/clerk-expo'

const SignUp = () => {

  const route = useNavigation()

  const { isLoaded, signUp, setActive } = useSignUp()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pendingVerify, setPendingVerify] = useState(false)
  const [code, setCode] = useState('')

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    try {

      await signUp.create({
        emailAddress: email,
        password: password
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      setPendingVerify(true)

    } catch (err) {
      console.log(JSON.stringify(err));
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }

    try {

      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code
      })

      await setActive({ session: completeSignUp.createdSessionId })

      route.navigate('Home')

    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }

  return (
    <>
      {
        !pendingVerify && (
          <View style={styles.container}>
            <Image style={styles.image} source={signupBanner} />
            <Text style={styles.mainText}>New On Here</Text>
            <Text style={styles.secondaryText}>Register and boost your ability</Text>
            <View style={styles.textInputContainer}>
              <TextInput style={styles.textInput} placeholder='Full Name' textContentType='name' />
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.textInput} placeholder='Email' textContentType='emailAddress' />
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.textInput} placeholder='Password' textContentType='password' secureTextEntry={true} />
              <TouchableOpacity style={styles.button}>
                <Button onPress={onSignUpPress} title='Sign Up' />
              </TouchableOpacity>
            </View>
            <Text onPress={() => route.navigate('Login')} style={styles.secondaryText}>have an Account ? Login</Text>
          </View>
        )
      }
      {
        pendingVerify && (
          <View style={styles.container}>
            <Image style={styles.image} source={signupBanner} />
            <Text style={styles.mainText}>Check Your Email</Text>
            <Text style={styles.secondaryText}>Verify Your Email Address</Text>
            <View style={styles.textInputContainer}>
              <TextInput onChangeText={(text) => setCode(text)} style={styles.textInput} placeholder='Code' />
              <TouchableOpacity style={styles.button}>
                <Button onPress={onPressVerify} title='Verify' />
              </TouchableOpacity>
            </View>
            <Text onPress={() => setPendingVerify(false)} style={styles.secondaryText}>Go to Sign Up Page</Text>
          </View>
        )
      }
    </>
  )
}

export default SignUp