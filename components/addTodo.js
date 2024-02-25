import React, {useState} from 'react' ;
import { StyleSheet, Text, TextInput, View, Button  } from 'react-native';

export default function addTodo({ submitHandler }){ 

    const[text, setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
    // const addTask = () =>{
    //     //  
    // }
    return (
        <View>
            <TextInput 
            style = {styles.input}
            placeholder='New Todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={submitHandler} title= 'addTodo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
})