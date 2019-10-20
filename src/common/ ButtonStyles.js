import {StyleSheet} from 'react-native';
import colors from '../utils/Colors';

const Button = StyleSheet.create({
  container: {
    height: 40,
    borderColor: colors.button_blue,
    borderWidth: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});
export default Button;
