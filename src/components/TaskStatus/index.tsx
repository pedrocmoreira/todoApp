import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  title: string;
  color: string;
  tasksValue: number;
}

export function TaskStatus({title, color, tasksValue}:Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,{color: color}]}>{title}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{tasksValue}</Text>
      </View>
    </View>
  );
}