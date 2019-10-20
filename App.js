import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/components/Login';
import UserListContainer from './src/container/UserListContainer';

const Router = createStackNavigator({
  Login: {
    screen: Login,
  },
  UserListContainer: {
    screen: UserListContainer,
  },
});

const AppRouter = createAppContainer(Router);

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
