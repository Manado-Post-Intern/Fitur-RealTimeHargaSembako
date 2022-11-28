import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Categories from '../../atoms/Categories';

const categories = ['Pariwisata', 'Daerah', 'Manado'];

const CategoryHorizontal = () => {
  return (
    <View style={styles.categoriesContainer}>
      {categories.map((item, i) => (
        <Categories item={item} key={i} />
      ))}
    </View>
  );
};

export default CategoryHorizontal;

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
  },
});
