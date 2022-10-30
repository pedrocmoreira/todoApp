import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { Header } from '../../components/Header';

import { styles } from './styles';
import { TaskStatus } from '../../components/TaskStatus';
import { TaskCard } from '../../components/TaskCard';

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');
  const [isDone, setIsDone] = useState(false);

  function handleOnBlur() {
    setIsFocused(false);
  }

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleAddTask() {
    if(task.length == 0 ){
      Alert.alert('Adicione uma task', 'Por favor adicione uma task para continuar!');
      return
    }

    setTasks(prevState => [...prevState, task]);
    setTask('');
  }

  function onRemoveTask(taskItem:string){
    setTasks(prevState => prevState.filter(task => task == taskItem))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
          style={[styles.input, { borderColor: isFocused ? '#5E60CE' : '#0D0D0D'}]}
          placeholderTextColor={'#808080'}
          placeholder='Adicione uma nova tarefa'
          onChangeText={setTask}
          value={task}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTask}
        >
          <AntDesign name='pluscircleo' size={16} color={'#F2F2F2'} />
        </TouchableOpacity>
      </View>

      <View style={styles.status}>
        <TaskStatus
          title='Criadas'
          tasksValue={tasks.length}
          color='#4EA8DE'
        />
        {/* <TaskStatus
          title='Concluídas'
          tasksValue={8}
          color='#8284FA'
        /> */}
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        style={styles.taskContainer}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onRemoveTask={() => onRemoveTask(task)}
          />
        )}
      />

    </SafeAreaView>
  );
}