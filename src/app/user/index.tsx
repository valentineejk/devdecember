import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const User = () => {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:"Days"}} />
      <Text>User</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default User