import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";


const AddTask = ({ onAddTask }) => {

    const [title, setTitle] = useState("");

    const handleAddTask = () => {
        if (title.trim() !== "") {
            onAddTask(title);
            setTitle("");
        }
    };

    return (

        <View style={styles.addTodoForm}>
            <TextInput
                style={styles.input}
                placeholder="Enter title"
                value={title}
                onChangeText={(title) => setTitle(title)}
            />
            <Button title="Add Task" onPress={handleAddTask}/>
        </View>

    );
}

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;