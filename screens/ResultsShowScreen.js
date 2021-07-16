import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ route, navigation }) => {
  const [result, setResult] = useState(null)
  const id = route.params?.id ?? 'null'
  console.log(id)

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text style={styles.headingStyle}>{result.name}</Text>
      <View style={{ borderBottomColor: 'black', marginBottom: 15, borderBottomWidth: 1 }} />
      <FlatList
        data={result.photos}
        horizontal
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />
        }}
      />
      <View style={styles.resultStyle}>
        <Text style={styles.textStyle}>Phone: {result.phone}</Text>
        <Text style={styles.textStyle}>Address: {result.location.address1}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: 300,
    padding: 20,
    marginHorizontal: 10
  },
  headingStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 20
  },
  resultStyle: {
    height: 200,
    flexDirection: 'column',
    padding: 20
  },
  textStyle: {
    fontWeight: 'bold',
  }
})

export default ResultsShowScreen
