import React from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { Header } from '../../components/Header';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput
           style={styles.input}
           placeholder='Nome do participante'
           placeholderTextColor={'##808080'}
        />

        <TouchableOpacity
          style={styles.button}
        >
          <AntDesign name='pluscircleo' size={16} color={'#F2F2F2'} />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}