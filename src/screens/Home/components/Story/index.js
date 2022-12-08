import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap} from '../../../../components';
import Card from './Card';

const data = ['Minahasa', 'Manado', 'Minahasa Utara', 'Bitung'];

const Story = () => {
  return (
    <View>
      <FlatList
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
        ItemSeparatorComponent={() => <Gap width={9} />}
        data={data}
        horizontal
        renderItem={({item}) => <Card item={item} />}
      />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 5,
  },
});
