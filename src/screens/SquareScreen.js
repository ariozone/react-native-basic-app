import React, { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const SquareScreen = () => {
  const [red, setRed] = useState(100)
  const [green, setGreen] = useState(100)
  const [blue, setBlue] = useState(100)

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => setRed(red + 10)}
        onDecrease={() => setRed(red - 10)}
      ></ColorCounter>
      <ColorCounter
        color='Green'
        onIncrease={() => setGreen(green + 10)}
        onDecrease={() => setGreen(green - 10)}
      ></ColorCounter>
      <ColorCounter
        color='Blue'
        onIncrease={() => setBlue(blue + 10)}
        onDecrease={() => setBlue(blue - 10)}
      ></ColorCounter>
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      ></View>
    </View>
  )
}
const style = StyleSheet.create({})

export default SquareScreen
