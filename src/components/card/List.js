import React from 'react';
import {Text, View} from 'react-native';
import {withNavigation} from 'react-navigation';

import styles from './ListStyles';

const List = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.textContainer}>
        <Text style={styles.item}>
          <Text style={styles.heading}> Name: </Text>
          {props.name}
        </Text>
        <Text style={styles.item}>
          {' '}
          <Text style={styles.heading}>Age:</Text>
          {props.age}
        </Text>
        <Text style={styles.item}>
          {' '}
          <Text style={styles.heading}>Gender:</Text>
          {props.gender}
        </Text>
        <Text style={styles.item}>
          {' '}
          <Text style={styles.heading}>Email:</Text>
          {props.email}
        </Text>
        <Text style={styles.item}>
          {' '}
          <Text style={styles.heading}>phoneNo:</Text>
          {props.phoneNo}
        </Text>
      </View>
    </View>
  );
};

export default withNavigation(List);

// "id": 2,
// "name": "test2",
// "age": "12",
// "gender": "male",
// "email": "test2@gmail.com",
// "phoneNo": "9415346314"
