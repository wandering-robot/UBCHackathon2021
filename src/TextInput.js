import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';


const EmployeeIdeaTextInput = () => {
  const [text, setText] = React.useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="What's your idea, bitch?"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        
        {text}
      </Text>
    </View>
  );
}

export default EmployeeIdeaTextInput;