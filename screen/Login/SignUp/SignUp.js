import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './signUp.style'
import { signupBanner } from '../../../constants/images'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const route = useNavigation()

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={signupBanner} />
      <Text style={styles.mainText}>New On Here</Text>
      <Text style={styles.secondaryText}>Register and boost your ability</Text>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder='Full Name' textContentType='name' />
        <TextInput style={styles.textInput} placeholder='Email' textContentType='emailAddress' />
        <TextInput style={styles.textInput} placeholder='Password' textContentType='password' secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Button title='Sign In' />
        </TouchableOpacity>
      </View>
      <Text onPress={() => route.navigate('Login')} style={styles.secondaryText}>Don't have an Account ? Login</Text>
    </View>
  )
}

export default SignUp