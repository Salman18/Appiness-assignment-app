import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import colors from '../utils/Colors';

const LoginStyles = StyleSheet.create({
  OuterContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  Header: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  InputPadding: {
    padding: 15,
  },
  TextInputStyle: {
    height: 50,
    marginBottom: 15,
    fontSize: 20,
  },
  ButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  LoginButton: {
    borderRadius: 20,
    backgroundColor: colors.button_blue,
    paddingVertical: Platform.OS === 'android' ? 23 : 0,
    marginBottom: 10,
    height: 10,
  },
  LoginText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default LoginStyles;
