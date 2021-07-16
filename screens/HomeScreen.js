import * as React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'

export default function HomeScreen({navigation}){
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go To Search Screen"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  )
}

