import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onBoarding from './screens/OnBoarding';
import SignUp from './screens/Signup';
import Signin from './screens/Signin';
import LoggedInStack from './screens/LoggedInStack'


const Stack = createNativeStackNavigator();


const NavigationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Onboarding" component={onBoarding} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={Signin} />
      <Stack.Screen name="LoggedInStack" component={LoggedInStack} />
    </Stack.Navigator>
  )
}

export default NavigationStack

const styles = StyleSheet.create({})