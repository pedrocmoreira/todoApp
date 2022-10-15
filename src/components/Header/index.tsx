import React from 'react';
import { View, Image } from 'react-native';
import logoImg from '../../assets/logo.png';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
    </View>
  );
}