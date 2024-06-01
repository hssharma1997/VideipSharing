import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateScreen = () => {
  return (
    <View style={styles.page}>
      <Text>CreateScreen</Text>
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#161622',
  },
})