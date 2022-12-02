import {Alert, Pressable, Share, StyleSheet, View} from 'react-native';
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

const Actions = ({type, border = true}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert(error.message);
    }
  };

  switch (type) {
    case 'big':
      return (
        <View style={[styles.container, border && styles.borderTop]}>
          <Pressable style={styles.buttonContainer}>
            <IcLoveBig style={{height: 19, width: 19}} />
            <Gap width={4} />
            <TextInter style={styles.labelBig}>367k</TextInter>
          </Pressable>
          <Pressable style={styles.buttonContainer} onPress={() => onShare()}>
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
        <View style={[styles.container, border && styles.borderTop]}>
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
    paddingTop: 5,
    width: '100%',
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.MPWhite,
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
