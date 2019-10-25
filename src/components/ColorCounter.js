import React from "react"
import { View, Button, StyleSheet, Text } from "react-native"

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`More ${color}`}></Button>
      <Button title={`Less ${color}`}></Button>
    </View>
  )
}
const style = StyleSheet.create({})
export default ColorCounter
