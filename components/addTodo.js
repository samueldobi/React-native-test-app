import React, {useState} from 'react' ;
import { StyleSheet, Text, TextInput, Button  } from 'react-native';
import { View } from 'react-native-web';

export default function addTodo(){ 

    const[text, setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
    return (
        <View>
            <TextInput 
            style = {styles.input}
            placeholder='New Todo...'
            onChangeText={changeHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:
})