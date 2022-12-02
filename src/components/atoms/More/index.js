import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gap from '../Gap';
import TextInter from '../TextInter';
import {IcArrowRight, theme} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const More = ({screen}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (screen) {
      navigation.navigate(screen);
    } else {
      console.log('Screen not found');
    }
  };
  return (
    <Pressable style={styles.container} onPress={() => handlePress()}>
      <TextInter style={styles.label}>Lihat Lebih Banyak</TextInter>
      <Gap width={4} />
      <IcArrowRight />
    </Pressable>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.MPWhite4,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  label: {
    color: theme.colors.MPBlue5,
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 14,
  },
});
