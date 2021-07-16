import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

export default function SearchScreen() {
  const [term, setTerm] = useState('')
  const [searchAPI, results, errorMessage] = useResults();

  const filterbyPrice = price => {
    return results.filter(result => {
      return result.price === price
    })

  }

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterbyPrice('$')}
          title="Cost Effective"

        />
        <ResultsList
          results={filterbyPrice('$$')}
          title="Bit Pricier"

          />
        <ResultsList
          results={filterbyPrice('$$$')}
          title="Big Spender"

          />

        <ResultsList
          results={filterbyPrice('$$$$')}
          title="Super Expensive"
          />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
})