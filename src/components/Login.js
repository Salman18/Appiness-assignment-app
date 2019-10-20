import React from 'react';
import {View, TextInput} from 'react-native';
import Toast from 'react-native-simple-toast';
import Button from '../common/Button';
import styles from './LoginStyles';
import color from '../utils/Colors';
import {EMAIL_ID, PASSWORD, ERROR} from '../utils/Constants';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: color.button_blue,
    },
    headerTintColor: color.headerTintColor,
    headdingStyle: {
      fontWeight: '300',
    },
  };
  authenticate = async () => {
    const {email, password} = this.state;
    const {navigation} = this.props;

    try {
      if (email === EMAIL_ID && password === PASSWORD) {
        Toast.show('LoginSuccessfull');
        navigation.navigate('UserListContainer', {...this.props});
      } else {
        Toast.show(ERROR);
        return;
      }
    } catch (error) {
      Toast.show(error.message);
    }
  };

  render() {
    return (
      <View style={styles.OuterContainer}>
        <View style={styles.InputPadding}>
          <TextInput
            style={styles.TextInputStyle}
            underlineColorAndroid={color.underlineColorAndroid}
            placeholder="Please enter your email Id"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={styles.TextInputStyle}
            underlineColorAndroid={color.underlineColorAndroid}
            secureTextEntry={true}
            placeholder="Please enter your password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            text="Log in"
            width="25%"
            textStyle={styles.LoginText}
            buttonStyle={styles.LoginButton}
            onPress={this.authenticate}
          />
        </View>
      </View>
    );
  }
}

export default Login;
