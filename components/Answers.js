import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, FlatList, View, TouchableOpacity, Alert} from 'react-native';
import Submit from './Submit Answer'

export default function EmployeesAnswer( ) {
    const [Answer, setANswer] = useState([
      ]);                                   //array for keeping answers  example:{text: ' John from accounting is definitly fired', key: '1'},

    const submitHandler = (text) => {

        if(text.length > 3){            //setting a condition so we dont submit blank answers

            setANswer((prevAnswer) => {
                return [
                    { text: text, key: Math.random().toString()},
                    ...prevAnswer
                ];
            })


        }
        else{

        }

       
    }


  return (
     <View style = {styles.header}>
        <Submit submitHandler = {submitHandler} />
        <Text style={styles.title}></Text>
        <View style={styles.list}>
            <FlatList
            data = {Answer}
            renderItem = {({item}) => (<Text style={styles.item}>{item.text}</Text>)}
            />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
      padding: 100
  },

  item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'auto',
      borderRadius: 10
  }
});