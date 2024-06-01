import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SavedScreen = () => {
  return (
    <View style={styles.page}>
      <Text>SavedScreen</Text>
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#161622',
  },
})