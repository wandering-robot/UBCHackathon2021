import React, {useState, useEffect, Component} from 'react';
import { render } from 'react-dom';
import { TouchableOpacity, StyleSheet, Text, Button, FlatList, View, Alert } from 'react-native';

export default class App extends Component {


  // const [countriesData, setCountriesData] = useState([])
  handlePress = async() => {
    fetch('https://vast-ocean-93287.herokuapp.com/helloworld')
      // .then((response) => response.json())
      // .then((json) => setCountriesData(json))
      // .catch((error) => console.error(error))
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // useEffect(()=> {
  //   fetchCountriesData();
  // })

  // return (
  //   <View>
  //     <Button title="I am a Button!"/>

  //     <FlatList
  //       data={countriesData}
  //       contentContainerStyle={styles.container}
  //       keyExtractor={item => item.server_return}
  //       renderItem={({item})=> <Text style={styles.text}>{item.name}</Text>}
  //     />
  //   </View>
  // );

  render() {
    return(
      <View style={{paddingTop: 50, paddingLeft: 50 }}>
      <Text> Some other text </Text>
        <Text> Some other text </Text>
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
        <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
        </TouchableOpacity>
      </View> 
    );
  }
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
