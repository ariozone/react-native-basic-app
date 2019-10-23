import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

const ListScreen = () => {
  const friends = [
    { name: "freind #1", age: 23 },
    { name: "freind #2", age: 34 },
    { name: "freind #3", age: 43 },
    { name: "freind #4", age: 32 },
    { name: "freind #5", age: 31 },
    { name: "freind #6", age: 38 },
    { name: "freind #7", age: 29 },
    { name: "freind #8", age: 41 },
    { name: "freind #9", age: 37 }
  ]
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    ></FlatList>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 20,
    marginVertical: 50
  }
})

export default ListScreen
