import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

export default function SearchScreen() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchAPI = async () => {
    try {
      const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'San Francisco'
      }
    });
    setResults(response.data.businesses)
  } catch (err) {
    setErrorMessage('Something went wrong')
  }
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchAPI}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})