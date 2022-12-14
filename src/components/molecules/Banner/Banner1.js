import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {} from '../../atoms';
import {IMGBanner1} from '../../../assets';

const Banner1 = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image style={styles.banner} source={IMGBanner1} />
    </View>
  );
};

export default Banner1;

const styles = StyleSheet.create({
  bannerContainer: {
    paddingHorizontal: 16,
    marginTop: -25,
  },
  banner: {
    width: '100%',
    height: 130,
    resizeMode: 'contain',
  },
});
