import React, { useReducer } from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload }
    case "decrease":
      return { ...state, counter: state.counter - action.payload }
    default:
      return state
  }
}
const CounterScreeen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  const payload = 10

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ payload, type: "increase" })
        }}
      ></Button>
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ payload, type: "decrease" })
        }}
      ></Button>
      <Text>Current Count: {state.counter}</Text>
    </View>
  )
}
const style = StyleSheet.create({})
export default CounterScreeen
