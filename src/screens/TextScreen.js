import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

const TextScreen = () => {
  const [text, setText] = useState("")
  return (
    <View>
      <Text style={styles.text}>Enter Name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={text}
        onChangeText={input => setText(input)}
      ></TextInput>
      <Text style={styles.text}>My name is {text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "gray",
    color: "gray",
    borderWidth: 1,
    height: 50,
    fontSize: 30
  },
  text: { fontSize: 30 }
})
export default TextScreen
