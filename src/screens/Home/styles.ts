import { StyleSheet } from 'react-native';
import { theme } from '../../themes/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray_600,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: -30,
  },
  input: {
    width: '70%',
    height:54,
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: theme.colors.gray_500,
    fontFamily: theme.fonts.interRegular,
    fontSize: 16,
    paddingLeft: 16,
    marginRight: 4, 
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: theme.colors.blue_dark,
    alignItems: 'center',
    justifyContent: 'center'
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 25
  },
  taskContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 20, 
  }
});