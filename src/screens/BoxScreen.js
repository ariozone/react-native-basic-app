import React from "react"
import { View, StyleSheet, Text } from "react-native"

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 5,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200
  },
  viewOneStyle: { width: 50, height: 50, backgroundColor: "red" },
  viewTwoStyle: { width: 50, height: 50, backgroundColor: "green", top: 50 },
  viewThreeStyle: { width: 50, height: 50, backgroundColor: "purple" }
})
export default BoxScreen
