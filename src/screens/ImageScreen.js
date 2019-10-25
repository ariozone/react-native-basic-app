import React from "react"
import { View, Text, StyleSheet } from "react-native"
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imageSrc={require("../../assets/forest.jpg")}
      ></ImageDetail>
      <ImageDetail
        title='Beach'
        imageSrc={require("../../assets/beach.jpg")}
      ></ImageDetail>
      <ImageDetail
        title='Mountain'
        imageSrc={require("../../assets/mountain.jpg")}
      ></ImageDetail>
    </View>
  )
}
const styles = StyleSheet.create({})
export default ImageScreen
