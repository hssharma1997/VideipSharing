import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.page}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#161622',
  },
})