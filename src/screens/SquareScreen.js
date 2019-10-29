import React, { useReducer } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const reducer = (state, action) => {
  switch (action.color) {
    case "red":
      return { ...state, red: state.red + action.amount }
    case "green":
      return { ...state, green: state.green + action.amount }
    case "blue":
      return { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const CHANGE_AMOUNT = 15
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => dispatch({ amount: CHANGE_AMOUNT, color: "red" })}
        onDecrease={() =>
          dispatch({ amount: -1 * CHANGE_AMOUNT, color: "red" })
        }
      ></ColorCounter>
      <ColorCounter
        color='Green'
        onIncrease={() => dispatch({ amount: CHANGE_AMOUNT, color: "green" })}
        onDecrease={() =>
          dispatch({ amount: -1 * CHANGE_AMOUNT, color: "green" })
        }
      ></ColorCounter>
      <ColorCounter
        color='Blue'
        onIncrease={() => dispatch({ amount: CHANGE_AMOUNT, color: "blue" })}
        onDecrease={() =>
          dispatch({ amount: -1 * CHANGE_AMOUNT, color: "blue" })
        }
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
