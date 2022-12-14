import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextInter from '../TextInter';
import {theme} from '../../../assets';

const Categories = ({item}) => {
  return (
    <View style={styles.categories}>
      <TextInter style={styles.categoriesLabel}>{item}</TextInter>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categories: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: theme.colors.MPBlue1,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  categoriesLabel: {
    fontSize: 10,
    color: theme.colors.MPBlue1,
  },
});
