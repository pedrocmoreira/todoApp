import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { Header } from '../../components/Header';

import { styles } from './styles';
import { TaskStatus } from '../../components/TaskStatus';
import { TaskCard } from '../../components/TaskCard';

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  function handleOnBlur(){
    setIsFocused(false);
  }

  function handleOnFocus(){
    setIsFocused(true);
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput      
           style={[styles.input, {borderColor: isFocused ? '#5E60CE' : '#0D0D0D'}]}
           placeholderTextColor={'#808080'}
           placeholder='Adicione uma nova tarefa'
           onFocus={handleOnFocus}
           onBlur={handleOnBlur}
        />

        <TouchableOpacity
          style={styles.button}
        >
          <AntDesign name='pluscircleo' size={16} color={'#F2F2F2'} />
        </TouchableOpacity>
      </View>

      <View style={styles.status}>
        <TaskStatus
          title='Criadas'
          tasksValue={2}
          color='#4EA8DE'
        />
        <TaskStatus
          title='Concluídas'
          tasksValue={8}
          color='#8284FA'
        />
      </View>

      <ScrollView style={styles.taskContainer}>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </ScrollView>

    </SafeAreaView>
  );
}