import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome5 name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 30,
    color: 'red',
    alignSelf: 'center',
    marginHorizontal: 15
  }
  })

export default SearchBar