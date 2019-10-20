import React, {Component} from 'react';
import {View, FlatList, StatusBar, ActivityIndicator} from 'react-native';
import List from '../card/List';

import styles from './UserListStyles';
import colors from '../../utils/Colors';

class UserList extends Component {
  componentDidMount() {
    this.props.getData();
    console.log('here', this.props.data);
  }
  static navigationOptions = {
    title: 'Employee List',
    headerStyle: {
      backgroundColor: colors.button_blue,
    },
    headerTintColor: '#fffF',
    headdingStyle: {
      fontWeight: '300',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        {this.props.loading ? (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            data={this.props.data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <List {...item} />}
          />
        )}
      </View>
    );
  }
}

export default UserList;
