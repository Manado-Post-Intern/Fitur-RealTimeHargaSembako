import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {IcLove, IcShare, IcWhatsapp, theme} from '../../../../assets';
import {Gap, TextInter} from '../../../../components';

const Actions = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonContainer}>
        <IcLove />
        <Gap width={4} />
        <TextInter style={styles.label}>367k</TextInter>
      </Pressable>
      <Pressable style={styles.buttonContainer}>
        <IcShare />
        <Gap width={4} />
        <TextInter style={styles.label}>Share</TextInter>
      </Pressable>
      <Pressable style={styles.buttonContainer}>
        <IcWhatsapp />
        <Gap width={4} />
        <TextInter style={styles.label}>WhatsApp</TextInter>
      </Pressable>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: theme.colors.MPWhite,
    paddingTop: 5,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
  label: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 10,
    color: theme.colors.MPGrey3,
  },
});
