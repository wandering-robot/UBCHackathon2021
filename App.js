import React, {useState, useEffect, Component} from 'react';
import { StyleSheet, Text, Button, FlatList, View, TextInput } from 'react-native';
import InputField from './components/textdisplay'
import ViewSolutions from './components/Solutions'
import ViewProblems from './components/Problems'
import EmployeeIdeaTextInput from './components/SolutionTextInput'
import ManagerProblemTextInput from './components/ProblemTextInput'


const App = () => {
  const [viewId, setViewId] = React.useState(null);
  
  if (viewId == 1)
  {
    return (
      <View>
        <ViewSolutions problemId='1' />
        <Button
            title = 'create solution'
            onPress={()=>setViewId(2)}
        />
        <Button
            title = 'go back'
            onPress={()=>setViewId(null)}
        />
      </View>
      )
  }
  if (viewId == 2)
  {
    return (
      <View>
        <EmployeeIdeaTextInput setViewId={setViewId} />
        <Button
            title = 'go back'
            onPress={()=>setViewId(null)}
        />
      </View>
      )
  }
  if (viewId == 3)
  {
    return (
      <View>
        <ManagerProblemTextInput setViewId={setViewId}/>
        <Button
            title = 'go back'
            onPress={()=>setViewId(null)}
        />
      </View>
      )
  }
  else
  { 
    return (
      <View>
        <ViewProblems setViewId={setViewId}/>
        <Button
            title = 'create problem'
            onPress={()=>setViewId(3)}
        />
      </View>
      )
  }
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
