import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {IMGDummyNews, theme} from '../../../../../../assets';
import {
  Actions,
  CategoryHorizontal,
  Gap,
  TextInter,
  TimeStamp,
} from '../../../../../../components';

const Card = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IMGDummyNews} />
      <View style={styles.informationContainer}>
        <TextInter style={styles.title}>
          Rumah Makan Murah Menjamur di Manado, Seporsi Nasi Ayam dengan Sup
          Brenebon dan Minuman Rp 15 Ribu
        </TextInter>
        <Gap height={8} />
        <TimeStamp />
        <Gap height={4} />
        <CategoryHorizontal />
        <Gap height={4} />
        <Actions type="big" />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.white,
    marginVertical: 4,
  },
  image: {
    height: 242,
    width: '100%',
  },
  informationContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 14,
    color: theme.colors.dark1,
  },
});
