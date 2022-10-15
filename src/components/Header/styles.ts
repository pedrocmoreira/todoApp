import { StyleSheet } from 'react-native';
import { theme } from '../../themes/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    backgroundColor: theme.colors.gray_700,
  },
  logo: {
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 65,
    width: 110,
    height: 32,
  }
});