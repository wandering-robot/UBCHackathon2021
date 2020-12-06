import React, {useState, useEffect, Component} from 'react';
import { StyleSheet, Text, Button, FlatList, View, TextInput } from 'react-native';
import InputField from './components/textdisplay'
import EmployeeIdeaTextInput from './components/TextInput'
import ViewSolutions from './components/Solutions'
import ViewProblems from './components/Problems'


const App = () => {
  const [problemId, setProblemId] = React.useState(null);
  
  if (problemId)
  {
    return (
      <View>
        <EmployeeIdeaTextInput/>
        <ViewSolutions/>
        <InputField/>
        <InputField/>
        <InputField/>
        <InputField/>
        <Button
            title = 'go back'
            onPress={()=>setProblemId(null)}
        />
      </View>
      )
  }
  else
  { 
    return (
      <View>
        <ViewProblems setProblemId={setProblemId}/>
      </View>
      )
  }
<<<<<<< HEAD
=======

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
>>>>>>> fucked
}

export default App

//   const UselessTextInput = () => {
//     const [value, onChangeText] = React.useState("What's your idea?");

//     return (
//       <TextInput
//         style={{ height: 400, borderColor: 'gray', borderWidth: 5 }}
//         onChangeText={text => onChangeText(text)}
//         value={value}
//         // console.log(value);
//       />
//     );
// }

// class InputField extends Component {
//   state = {

//   }
// }

// export default UselessTextInput;
// export default function App() {

//   const [countriesData, setCountriesData] = useState([])
//   function fetchCountriesData() {
//     fetch('https://restcountries.eu/rest/v2/region/africa?fields=name')
//       .then((response) => response.json())
//       .then((json) => setCountriesData(json))
//       .catch((error) => console.error(error))
//   }

//   useEffect(()=> {
//     fetchCountriesData();
//   })

//   return (
//     <View>
//       <Button title="I am a Button"/>
//       <FlatList
//         data={countriesData}
//         contentContainerStyle={styles.container}
//         keyExtractor={item => item.name}
//         renderItem={({item})=> <Text style={styles.text}>{item.name}</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//   },
//   text: {
//     fontSize: 20,
//     margin: 10
//   },
// });
