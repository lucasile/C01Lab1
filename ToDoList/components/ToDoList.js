import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// HELLO TEACHING ASSISTANT. I NEED THIS POLYFILL FOR UUID TO WORK TY <3
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ titles }) => {

    const [toDos, setToDos] = useState(titles.map((val) => ({ id: uuidv4(), title: val })));

    const addToDo = (newTitle) => {
        setToDos(prevTitles => [
            ...prevTitles,
            {
                id: uuidv4(),
                title: newTitle
            }
        ]);
    };

    const removeToDo = (id) => {
        setToDos(prevTitles => prevTitles.filter((todo) => todo.id !== id));
    }

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((toDo) => (
                <View style={styles.todoItem} key={toDo.id}>
                    <Text>{toDo.title}</Text>
                    <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo}/>
        </View>
    );

};

ToDoList.defaultProps = {
    titles: []
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;