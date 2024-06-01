import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedScreen from '../screens/SavedScreen';
import CreateScreen from '../screens/CreateScreen';

const Tab = createBottomTabNavigator();


const LoggedInStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{backgroundColor:'#161622'}}} >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Create" component={CreateScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Saved" component={SavedScreen} />

  </Tab.Navigator>
  )
}

export default LoggedInStack

const styles = StyleSheet.create({})