import React, { useReducer } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const reducer = (state, action) => {
  switch (action.type) {
    case "changeRed":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
    case "changeGreen":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
    case "changeBlue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }
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
        onIncrease={() =>
          dispatch({ payload: CHANGE_AMOUNT, type: "changeRed" })
        }
        onDecrease={() =>
          dispatch({ payload: -1 * CHANGE_AMOUNT, type: "changeRed" })
        }
      ></ColorCounter>
      <ColorCounter
        color='Green'
        onIncrease={() =>
          dispatch({ payload: CHANGE_AMOUNT, type: "changeGreen" })
        }
        onDecrease={() =>
          dispatch({ payload: -1 * CHANGE_AMOUNT, type: "changeGreen" })
        }
      ></ColorCounter>
      <ColorCounter
        color='Blue'
        onIncrease={() =>
          dispatch({ payload: CHANGE_AMOUNT, type: "changeBlue" })
        }
        onDecrease={() =>
          dispatch({ payload: -1 * CHANGE_AMOUNT, type: "changeBlue" })
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
