// DailyTasks.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const DailyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      alert('Please enter a task');
      return;
    }

    const newTask = {
      taskName,
      isDone: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setTaskName('');
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Tasks</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Task Name"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>

      <Text style={styles.subtitle}>Task List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.taskItem, { backgroundColor: item.isDone ? '#90EE90' : '#FFF' }]}
            onPress={() => handleToggleTask(index)}
          >
            <Text style={styles.taskText}>{item.taskName}</Text>
            <Text style={styles.taskStatus}>{item.isDone ? 'Done' : 'Not Done'}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  taskItem: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    flex: 1,
  },
  taskStatus: {
    color: '#555',
    marginLeft: 10,
  },
});

export default DailyTasks;
