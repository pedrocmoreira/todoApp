import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

export function TaskCard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.taskButton}/>
      <Text style={styles.taskText} numberOfLines={2}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      <TouchableOpacity>
        <Feather name='trash-2' size={17} color='#808080'/>
      </TouchableOpacity>
    </View>
  );
}