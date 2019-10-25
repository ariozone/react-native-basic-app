import React, { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const CHANGE_AMOUNT = 15
  const setColor = (color, change) => {
    if (color + change > 255 || color + change < 0) return
    else {
      setRed(red + change)
    }
  }

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => setColor(red, CHANGE_AMOUNT)}
        onDecrease={() => setColor(red, -1 * CHANGE_AMOUNT)}
      ></ColorCounter>
      <ColorCounter
        color='Green'
        onIncrease={() => setGreen(green < 256 && green + CHANGE_AMOUNT)}
        onDecrease={() => setGreen(green >= 0 && green - CHANGE_AMOUNT)}
      ></ColorCounter>
      <ColorCounter
        color='Blue'
        onIncrease={() => setBlue(blue < 256 && blue + CHANGE_AMOUNT)}
        onDecrease={() => setBlue(blue >= 0 && blue - CHANGE_AMOUNT)}
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
