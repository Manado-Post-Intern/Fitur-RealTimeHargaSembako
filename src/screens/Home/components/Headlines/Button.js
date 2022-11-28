import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {IcNewspaper, theme} from '../../../../assets';
import {Gap, TextInter} from '../../../../components';

const Button = () => {
  return (
    <Pressable style={styles.container}>
      <IcNewspaper />
      <Gap width={4} />
      <TextInter style={styles.label}>Baca Berita</TextInter>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.MPBlue2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 8,
  },
  label: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 16,
    color: theme.colors.fontLight,
  },
});
