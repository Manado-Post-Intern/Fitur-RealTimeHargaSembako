import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, More, TextInter} from '../../../../components';
import {IMGLogoManado, theme} from '../../../../assets';
import Card from '../Card';

const data = [0, 1, 2];

const AreaSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image style={styles.logo} source={IMGLogoManado} />
        <Gap width={10} />
        <TextInter style={styles.title}>Manado</TextInter>
      </View>

      {data.map((item, i) => (
        <Card key={i} />
      ))}

      <More />
    </View>
  );
};

export default AreaSection;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  titleContainer: {
    paddingLeft: 24,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.colors.MPWhite4,
  },
  logo: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: theme.colors.MPGrey2,
  },
});
