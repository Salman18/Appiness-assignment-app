import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/components/Login';
// import NewsListContainer from './src/containers/NewsListContainer';
// import NewsDetail from './src/components/NewsDetail/NewsDetail';

const Router = createStackNavigator({
  Login: {
    screen: Login,
  },
});

const AppRouter = createAppContainer(Router);

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
