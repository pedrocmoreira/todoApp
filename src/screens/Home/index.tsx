import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { Header } from '../../components/Header';

import { styles } from './styles';

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

    </SafeAreaView>
  );
}