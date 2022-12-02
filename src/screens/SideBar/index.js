import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenHeightPercentage, screenWidth} from '../../utils';

const SideBar = () => {
  return (
    <View style={styles.container}>
      <Text>SideBar</Text>
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  container: {
    width: screenWidth(),
    height: screenHeightPercentage('100%'),
    backgroundColor: 'yellow',
  },
});
