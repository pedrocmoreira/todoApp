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
    marginBottom: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  checkButtonContainer: {
    justifyContent: 'center',
    marginRight: 8,
  },
  checkButton: {
    width: 18,
    height: 18,
    // borderWidth: 1,
    borderColor: theme.colors.blue,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
  },
  taskTextContainer: {
    justifyContent: 'center',
    // alignItems: 'center'
  },
  taskText: {
    color: theme.colors.gray_100,
    fontSize: 14,
    fontFamily: theme.fonts.interRegular,
    textAlign: 'justify',
    marginRight: 8,
    width: 250,
  },
  discardButtonContainer: {
    alignItems: 'flex-end', 
  }
});