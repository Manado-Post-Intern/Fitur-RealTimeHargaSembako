import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInter} from '../../../../../../components';
import CheckBox from '../../../../../Home/components/NewsForYou/components/CanalModal/components/Checkbox';
import {theme} from '../../../../../../assets';

const OptionRow = ({item, index, setActive, activeList}) => {
  const handleCheck = () => {
    if (!activeList.includes(item)) {
      setActive([...activeList, item]);
    } else {
      setActive(activeList.filter(x => x !== item));
    }
  };

  return (
    <View style={[styles.optionItemContainer, index !== 0 && styles.topBorder]}>
      <TextInter style={styles.optionItem}>{item}</TextInter>
    </View>
  );
};

export default OptionRow;

const styles = StyleSheet.create({
  optionItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  topBorder: {
    borderTopColor: theme.colors.MPWhite,
    borderTopWidth: 1,
  },
});
