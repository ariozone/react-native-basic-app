import React, { useReducer } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const reducer = (state, action) => {
  switch(action.color) {
    case 'red':
      return {...state, red: state.red + action.amount}
    case 'green':
      return {...state, green: state.green + action.amount}
    case 'blue':
      return {...state, blue: state.blue + action.amount}
      default:
        return state
  }
}
const SquareScreen = () => {
const [state, despatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const CHANGE_AMOUNT = 15

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => }
        onDecrease={() => }
      ></ColorCounter>
      <ColorCounter
        color='Green'
        onIncrease={() => }
        onDecrease={() => }
      ></ColorCounter>
      <ColorCounter
        color='Blue'
        onIncrease={() => }
        onDecrease={() =>  }
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
