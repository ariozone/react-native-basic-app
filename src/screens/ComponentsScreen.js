import React from "react"
import { Text, StyleSheet, View } from "react-native"

const ComponentsScreen = () => {
  const name = "Ario"
  return (
    <View style={{ backgroundColor: "black" }}>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={{ fontSize: 20, color: "white" }}>My name is {name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "white"
  }
})
export default ComponentsScreen
