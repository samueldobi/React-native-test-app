import React, { useState } from 'react' ;
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'ribadu ', key: '1' },
    { text: 'abido shaker', key: '2' },
    { text: 'gagan gagantusa', key: '3' }
  ]);
 
  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    } )
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* to-do form */}
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
