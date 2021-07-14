import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function SearchScreen() {
  const [term, setTerm] = useState('')
  return (
    <View>
      <Text>Search Screen Updated</Text>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})