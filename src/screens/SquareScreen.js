import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color='Red'></ColorCounter>
      <ColorCounter color='Green'></ColorCounter>
      <ColorCounter color='Blue'></ColorCounter>
    </View>
  )
}
const style = StyleSheet.create({})

export default SquareScreen
