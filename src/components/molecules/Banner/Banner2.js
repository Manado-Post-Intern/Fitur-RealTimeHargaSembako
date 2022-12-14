import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {} from '../../atoms';
import {IMGBanner2} from '../../../assets';

const Banner2 = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image style={styles.banner} source={IMGBanner2} />
    </View>
  );
};

export default Banner2;

const styles = StyleSheet.create({
  bannerContainer: {
    paddingHorizontal: 16,
    marginTop: -25,
  },
  banner: {
    width: '100%',
    height: 130,
  },
});
