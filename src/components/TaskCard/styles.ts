import { StyleSheet } from 'react-native';
import { theme } from '../../themes/styles';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width:'100%',
    height: 70,
    borderRadius: 8,
    borderColor: theme.colors.gray_400,
    borderWidth: 1,
    backgroundColor: theme.colors.gray_500,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  taskButton: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: theme.colors.blue,
    borderRadius: 18,
    marginRight: 8,
  },
  taskText: {
    color: theme.colors.gray_100,
    fontSize: 14,
    fontFamily: theme.fonts.interRegular,
    textAlign: 'justify',
    marginRight: 8,
  }
});