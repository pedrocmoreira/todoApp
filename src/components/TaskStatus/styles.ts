import { StyleSheet } from 'react-native';
import { theme } from '../../themes/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.interBold,
    fontSize: 14,
    marginRight: 8,
  },
  valueContainer:{
    backgroundColor: theme.colors.gray_400,
    paddingHorizontal: 8,
    // paddingVertical: 2,
    borderRadius: 16,
  },
  value: {
    fontFamily: theme.fonts.interBold,
    fontSize: 14,
    color: theme.colors.gray_200,
  }
});