
import React, { Component } from 'react';
import { Text, TextInput, View, Form, Button } from 'react-native';

var userdetails = "Eric L, Marketing"
const EmployeeIdeaTextInput = () => {
  const [text, setText] = React.useState('');
  const [text2, setText2] = React.useState('');

  async function PostSolution(){
    //fetch with {text}
    console.log('pressed');
    console.log(text + text2);
    
    const response = await fetch('https://vast-ocean-93287.herokuapp.com/evanCompany/2/4', {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
         'Content-Type': 'application/json'
      },
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({"userName": text2, "userSolution": text}) // body data type must match "Content-Type" header
    });
    console.log(response);
    return response; // parses JSON response into native JavaScript objects

    // postData('https://example.com/answer', { answer: 42 })
    //   .then(data => {
    //     console.log(data); // JSON data parsed by `data.json()` call
    //   });

  };

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
          {/* INPUT YOUR IDEA */}
      <TextInput
        style={{height: 40}}
        placeholder="What's your name?"
        onChangeText={text2 => setText2(text2)}
        defaultValue={text2}
      />
    
    {/* PRINTS TEXT USER ENTERED ABOVE */}
      <Text style={{padding: 10, fontSize: 22}}>
        {text}
        {text2}
      </Text>

      <Button
        title="Press me"
        onPress={PostSolution}
      />
    </View>
  );
}

export default EmployeeIdeaTextInput;