import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({ navigation }) => {
  const navigate = address => navigation.navigate(address)
  return (
    <View>
      <Text style={styles.text}>This is Ario's App</Text>
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
      <Button
        onPress={() => {
          navigate("Counter")
        }}
        title='Go to counter screen'
      />
      <Button
        onPress={() => navigate("Color")}
        title='Go to Colors Demo'
      ></Button>
      <Button
        onPress={() => {
          navigate("Square")
        }}
        title='Go to Square demo'
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
