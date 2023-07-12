import {StyleSheet, View} from 'react-native';
import React from 'react';
import {theme} from '../../../../assets';
import {
  CategoryHorizontal,
  Gap,
  TextInter,
  TimeStamp,
} from '../../../../components';

const Card = ({item, number}) => {
  return (
    <View style={styles.container}>
      <TextInter style={styles.number}>{number}</TextInter>
      <Gap width={14} />
      <View style={styles.innerContainer}>
        <TextInter style={styles.title}>{item?.title}</TextInter>

        <Gap height={8} />

        <TimeStamp data={item?.published_date} />

        <Gap height={4} />

        <CategoryHorizontal />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 21,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  number: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 16,
    color: theme.colors.grey1,
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 14,
    color: theme.colors.dark1,
  },
});
