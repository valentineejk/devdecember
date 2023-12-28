import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})