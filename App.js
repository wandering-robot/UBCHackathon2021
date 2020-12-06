import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, FlatList, View } from 'react-native';

export default function App() {

  const [countriesData, setCountriesData] = useState([])
  function fetchCountriesData() {
    fetch('https://restcountries.eu/rest/v2/region/africa?fields=name')
      .then((response) => response.json())
      .then((json) => setCountriesData(json))
      .catch((error) => console.error(error))
  }

  useEffect(()=> {
    fetchCountriesData();
  })

  return (
    <View>
      <Button title="I am done thank god"/>
      <FlatList
        data={countriesData}
        contentContainerStyle={styles.container}
        keyExtractor={item => item.name}
        renderItem={({item})=> <Text style={styles.text}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  text: {
    fontSize: 20,
    margin: 10
  },
});
