import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';

import styles from './ ButtonStyles';
import colors from '../utils/Colors';

const Button = ({
  text,
  width,
  onPress,
  backgroundColor,
  textColor,
  textStyle,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {width, backgroundColor, ...buttonStyle}]}>
      <Text style={[styles.text, {color: textColor, ...textStyle}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  textStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
};

Button.defaultProps = {
  text: '',
  textColor: colors.text_white,
  width: '',
  backgroundColor: colors.button_orange,
  textStyle: {},
  buttonStyle: {},
};
