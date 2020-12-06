import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, FlatList, View, TextInput } from 'react-native';




export default function Submit({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) =>{setText(val)}

    return (
        <View>
            <TextInput
                    style = {styles.input}
                    placeholder = 'new comment ....'
                    onChangeText = {changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title = 'Add Solution' color = 'coral' />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }

})