import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {theme} from '../../../assets';

const TextInter = props => {
  const {children, style, ...textProps} = props;

  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export default TextInter;

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.inter.regular,
    color: theme.colors.fontDark,
    fontSize: 12,
  },
});
