import React from "react"
import { View, StyleSheet, Text } from "react-native"

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 5,
    borderColor: "black",

    height: 200
  },
  textOneStyle: {
    borderWidth: 5,
    borderColor: "red"
  },
  textTwoStyle: {
    borderWidth: 5,
    borderColor: "red",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  textThreeStyle: {
    borderWidth: 5,
    borderColor: "red"
  }
})
export default BoxScreen
