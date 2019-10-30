import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

const TextScreen = () => {
  const [text, setText] = useState("")
  return (
    <View>
      <Text style={styles.text}>Enter Password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={text}
        onChangeText={input => setText(input)}
      ></TextInput>

      {text.length < 5 && (
        <Text style={styles.text}>
          Password must be longer than 5 characters{" "}
        </Text>
      )}
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
  text: { fontSize: 20, margin: 20 }
})
export default TextScreen
