import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import { styles } from './styles';


interface Props {
  task: string;
  onRemoveTask: () => void;
}

export function TaskCard({task, onRemoveTask}:Props) {
  const [doneTask, setDoneTask] = useState(false);

  function handleDoneTask() {
    setDoneTask(!doneTask);
  }

  return (
    <View style={styles.container}>
      <View style={styles.checkButtonContainer}>
        <TouchableOpacity
          style={[styles.checkButton, { backgroundColor: doneTask ? '#5E60CE' : '#262626', borderWidth: doneTask ? 0 : 1 }]}
          onPress={handleDoneTask}
        >
          {
            doneTask ?
              <AntDesign name='check' size={8} color='#F2F2F2' />
              : <></>
          }
        </TouchableOpacity>
      </View>

      <View style={styles.taskTextContainer}>
        <Text
          style={[styles.taskText, { textDecorationLine: doneTask ? 'line-through' : 'none', color: doneTask ? '#808080' : '#F2F2F2' }]}
          numberOfLines={2}
        >
          {task}
        </Text>
      </View>

      <View style={styles.discardButtonContainer}>
        <TouchableOpacity onPress={onRemoveTask}>
          <Feather name='trash-2' size={17} color='#808080' />
        </TouchableOpacity>
      </View>
    </View>
  );
}