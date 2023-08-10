import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMGLottery, IMGLotteryWinner, IcBack, theme} from '../../../../assets';
import {TextInter} from '../../../../components';

const name = 'Francisco Bates';
const email = 'vo@piccejlol.is';

const LotteryModal = ({visible = false, user, handleClose = () => {}}) => {
  return (
    <Modal animationType="slide" visible={visible} onRequestClose={handleClose}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={handleClose}>
            <IcBack />
          </TouchableOpacity>
          <TextInter style={styles.textScreenTitle}>Undian Berhadiah</TextInter>
        </View>

        <View style={styles.winnerContainer}>
          <Image source={IMGLottery} style={styles.boxImage} />
          <View style={{marginLeft: 5, flex: 1}}>
            <TextInter
              style={
                styles.textWinner
              }>{`Selamat Bagi Pemenang Bulan Ini ${user?.fullName}`}</TextInter>
            <TextInter style={styles.textEmail}>{`${user?.email}`}</TextInter>
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 8}}>
          <Image source={IMGLotteryWinner} />
          <TextInter style={styles.textDescription}>
            Silahkan mengambil hadiah anda di kantor Graha Pena Manado Post
            dengan membawa smartphone anda dan tanda pengenal.
          </TextInter>
        </View>
      </View>
    </Modal>
  );
};

export default LotteryModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textScreenTitle: {
    fontFamily: theme.fonts.inter.bold,
    fontSize: 24,
    color: theme.colors.MPGrey2,
    marginLeft: 16,
  },
  winnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.MPWhite,
  },
  boxImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textWinner: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 16,
    color: theme.colors.MPBlue0,
  },
  textEmail: {
    fontFamily: theme.fonts.inter.regular,
    fontSize: 12,
    color: theme.colors.grey1,
  },
  textDescription: {
    fontFamily: theme.fonts.inter.regular,
    fontSize: 11,
    color: theme.colors.grey1,
    width: '80%',
    marginTop: 8,
  },
});
