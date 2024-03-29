import React, { useState } from 'react' ;
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/todoItem';
import AddTodo  from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'ribadu ', key: '1' },
    { text: 'abido shaker', key: '2' },
    { text: 'gagan gagantusa', key: '3' }
  ]);

//  This function returns a new array of items and deletes the item todo item that was clicked
  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    } )
  }

  // Function to add  a new task 
const submitHandler = (text) => {
  setTodos((prevTodos) => {
    return [
      { text: text, key: Math.random().toString() },
      ...prevTodos
    ];
   
  })
}

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* The submitHandler prop is used so we can call the function to the addTodo component */}
        <AddTodo  submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({item}) =>(
          <TodoItem item={item} pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
