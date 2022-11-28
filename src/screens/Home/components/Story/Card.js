import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {IMGMinahasaLogo, IMGStoryDummy, theme} from '../../../../assets';
import {TextInter} from '../../../../components';

const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={IMGStoryDummy} />
      <View style={styles.innerContainer}>
        <View style={styles.avaContainer}>
          <Image style={styles.ava} source={IMGMinahasaLogo} />
        </View>
        <TextInter style={styles.text}>{item}</TextInter>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 195,
    width: 108,
  },
  picture: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
  innerContainer: {
    alignItems: 'center',
    top: -18,
  },
  avaContainer: {
    width: 37,
    height: 37,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 5,
  },
  ava: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 13,
    color: theme.colors.storyTextGray,
  },
});
