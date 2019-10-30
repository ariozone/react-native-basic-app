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
    alignItems: "center",
    height: 200
  },
  textOneStyle: {
    borderWidth: 5,
    borderColor: "red"
  },
  textTwoStyle: {
    borderWidth: 5,
    borderColor: "red",
    alignSelf: "stretch"
  },
  textThreeStyle: {
    borderWidth: 5,
    borderColor: "red"
  }
})
export default BoxScreen
