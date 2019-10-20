import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Toast from 'react-native-simple-toast';
import Button from '../common/Button';
import styles from './LoginStyles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  authenticate = async () => {
    const {email, password} = this.state;
    const {navigation} = this.props;

    try {
      if (email === 'hruday@gmail.com' && password === 'hruday123') {
        // navigation.navigate('DashBoard', {});
        Toast.show('LoginSuccessfull');
      } else {
        Toast.show('Please enter a valid phone number');
        return;
      }
    } catch (error) {
      Toast.show(error.message);
    }
  };

  render() {
    return (
      <View style={styles.OuterContainer}>
        <View>
          <Text style={styles.Header}>Log in</Text>

          <View style={styles.InputPadding}>
            <TextInput
              style={styles.TextInputStyle}
              underlineColorAndroid="#1DA1f2"
              placeholder="Please enter your email"
              selectionColor={{color: 'red'}}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <TextInput
              style={styles.TextInputStyle}
              underlineColorAndroid="#1DA1f2"
              secureTextEntry={true}
              placeholder="Please enter your password"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
          </View>
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
