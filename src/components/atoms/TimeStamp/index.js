import {StyleSheet} from 'react-native';
import React from 'react';
import TextInter from '../TextInter';
import {theme} from '../../../assets';

const TimeStamp = () => {
  return <TextInter style={styles.timeStamp}>30 Juni 2020 09:15 am</TextInter>;
};

export default TimeStamp;

const styles = StyleSheet.create({
  timeStamp: {
    fontSize: 10,
    color: theme.colors.headlines.timeStamps.color,
  },
});
