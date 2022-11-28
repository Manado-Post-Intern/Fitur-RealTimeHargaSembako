import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  IcLove,
  IcLoveBig,
  IcShare,
  IcShareBig,
  IcWhatsapp,
  IcWhatsappBig,
  theme,
} from '../../../assets';
import {Gap, TextInter} from '../../atoms';

const Actions = ({type}) => {
  switch (type) {
    case 'big':
      return (
        <View style={styles.container}>
          <Pressable style={styles.buttonContainer}>
            <IcLoveBig style={{height: 19, width: 19}} />
            <Gap width={4} />
            <TextInter style={styles.labelBig}>367k</TextInter>
          </Pressable>
          <Pressable style={styles.buttonContainer}>
            <IcShareBig />
            <Gap width={4} />
            <TextInter style={styles.labelBig}>Share</TextInter>
          </Pressable>
          <Pressable style={styles.buttonContainer}>
            <IcWhatsappBig />
            <Gap width={4} />
            <TextInter style={styles.labelBig}>WhatsApp</TextInter>
          </Pressable>
        </View>
      );
    default:
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
  }
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
  labelBig: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 16,
    color: theme.colors.MPGrey3,
  },
});
