import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../../assets';
import {
  CategoryHorizontal,
  Gap,
  TextInter,
  TimeStamp,
} from '../../../../components';

const Card = () => {
  return (
    <View style={styles.container}>
      <TextInter style={styles.title}>
        Kasat Reskrim Polresta Manado Kompol Rocky Wahyudi Santoso membenarkan
      </TextInter>
      <Gap height={8} />
      <TimeStamp />
      <Gap height={4} />
      <CategoryHorizontal />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 21,
    paddingVertical: 8,
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 14,
    color: theme.colors.dark1,
  },
});
