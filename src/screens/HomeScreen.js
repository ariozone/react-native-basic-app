import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({ navigation }) => {
  const navigate = address => navigation.navigate(address)
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => {
          navigate("Components")
        }}
      />
      <Button
        onPress={() => {
          navigate("List")
        }}
        title='Go to List Demo'
      ></Button>
      <Button
        onPress={() => {
          navigate("Image")
        }}
        title='Go to Image Screen'
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 50
  }
})

export default HomeScreen
