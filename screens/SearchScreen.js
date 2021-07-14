import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

export default function SearchScreen() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const searchAPI = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'San Francisco'
      }
    });
    setResults(response.data.businesses)
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchAPI}
      />
      <Text>Search Screen Updated</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})