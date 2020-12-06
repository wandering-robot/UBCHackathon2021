import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

class InputField extends Component {
	state = 'Hello World';

	render() {
		return (
			<View style={styles.container}>
				<Text>{this.state}</Text>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderColor: 'gray',
    borderWidth: 5
	}
});

export default InputField;










// const UselessTextInput = () => {
//   const [value, onChangeText] = React.useState("What's your idea?");

//   return (
//     <TextInput
//       style={{ height: 400, borderColor: 'gray', borderWidth: 5 }}
//       onChangeText={text => onChangeText(text)}
//       value={value}
//     />
//   );
// }

// export default UselessTextInput;