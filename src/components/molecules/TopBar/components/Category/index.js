import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInter} from '../../../../atoms';
import {Ic3Dot, theme} from '../../../../../assets';

const Category = ({dummy, active, setActive}) => {
  return (
    <View style={styles.bottomContainer}>
      <FlatList
        style={styles.flatList}
        data={dummy}
        horizontal
        renderItem={({item, index}) => (
          <Pressable
            style={[
              styles.itemContainer,
              active === index && styles.activeItem,
            ]}
            key={index}
            onPress={() => {
              setActive(index);
            }}>
            <TextInter
              style={[
                styles.itemLabel,
                active === index && styles.activeLabel,
              ]}>
              {item}
            </TextInter>
          </Pressable>
        )}
      />
      <Pressable style={styles.more}>
        <Ic3Dot />
      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  itemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 12,
  },
  activeItem: {
    backgroundColor: theme.colors.skyBlue2,
  },
  itemLabel: {
    color: theme.colors.grey1,
    fontSize: 10,
    fontFamily: theme.fonts.inter.semiBold,
  },
  activeLabel: {
    color: theme.colors.white,
  },
  more: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 20,
    height: 20,
    backgroundColor: theme.colors.MPWhite,
  },
});
