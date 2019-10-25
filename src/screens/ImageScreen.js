import React from "react"
import { View, Text, StyleSheet } from "react-native"
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSrc={require("../../assets/forest.jpg")}
        score={9}
      ></ImageDetail>
      <ImageDetail
        title='Beach'
        imageSrc={require("../../assets/beach.jpg")}
        score={7}
      ></ImageDetail>
      <ImageDetail
        title='Mountain'
        imageSrc={require("../../assets/mountain.jpg")}
        score={4}
      ></ImageDetail>
    </View>
  )
}
const styles = StyleSheet.create({})
export default ImageScreen
