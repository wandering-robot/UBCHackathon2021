import React, { Component } from 'react';
import { TextInput } from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState("What's your idea?");

  return (
    <TextInput
      style={{ height: 400, borderColor: 'gray', borderWidth: 5 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

export default UselessTextInput;