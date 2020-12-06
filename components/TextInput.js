
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

var userdetails = "Eric L, Marketing"
const EmployeeIdeaTextInput = () => {
  const [text, setText] = React.useState('');
  return (

  <View style={{padding: 10}}>
    {/* USER DETAILS HERE           */}
      <Text style={{padding:10, fontsize:30}}> 
        {userdetails}
      </Text>

    {/* INPUT YOUR IDEA */}
      <TextInput
        style={{height: 40}}
        placeholder="What's your idea?"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    
    {/* PRINTS TEXT USER ENTERED ABOVE */}
      <Text style={{padding: 10, fontSize: 22}}>
        {text}
      </Text>
    </View>
  );
}

export default EmployeeIdeaTextInput;