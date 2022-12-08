import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Gap, TextInter, TopBar} from '../../../../components';
import {
  IcBigCheckmark,
  IcCalendarGrey,
  IcLink,
  theme,
} from '../../../../assets';
import {Duration, Position} from './components';
import ModalCalendar from '../../../../components/molecules/ModalCalendar';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';

const Order = ({route}) => {
  const {type} = route;

  const [calendarModal, setCalendarModal] = useState(false);
  const modalRef = useRef();

  const snapPoints = useMemo(() => ['50%'], []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop opacity={0.5} pressBehavior="close" {...props} />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <View>
        <TopBar type="order" />
      </View>
      <View style={styles.body}>
        <TextInter style={styles.title}>MP Ads - Top Banner</TextInter>
        <View style={styles.browseContainer}>
          <Pressable style={styles.browseButton}>
            <TextInter style={styles.browseLabel}>browse picture</TextInter>
          </Pressable>
          <TextInter style={styles.browseNote}>
            picture Height = 100 Px
          </TextInter>
        </View>
        <Gap height={20} />
        <View style={styles.linkInputContainer}>
          <TextInput
            style={styles.linkInput}
            placeholder="Paste Link Here"
            placeholderTextColor="#617D9780"
          />
          <IcLink />
        </View>
        <Gap height={20} />

        <Position />

        <Gap height={16} />

        <View style={styles.row}>
          <Duration />
          <Gap width={16} />
          <View style={styles.calendarContainer}>
            <TextInter style={styles.calendarLabel}>Tanggal Mulai</TextInter>
            <Pressable
              style={styles.fieldContainer}
              onPress={() => setCalendarModal(true)}>
              <TextInter style={styles.activeDate}>1 Januari 2023</TextInter>
              <IcCalendarGrey />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.priceContainer}>
          <TextInter style={styles.totalLabel}>total</TextInter>
          <TextInter style={styles.total}>Rp. 1.560.000</TextInter>
        </View>
        <Pressable
          style={styles.buyAdsButton}
          onPress={() => modalRef.current.expand()}>
          <TextInter style={styles.buyAdsLabel}>Pasang Iklan</TextInter>
        </Pressable>
      </View>

      <ModalCalendar isOpen={calendarModal} setIsOpen={setCalendarModal} />
      <BottomSheet
        ref={modalRef}
        enablePanDownToClose={true}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheet}>
        <View style={styles.successModalContainer}>
          <TextInter style={styles.successTitle}>
            Iklan Berhasil dipesan
          </TextInter>
          <Gap height={24} />
          <IcBigCheckmark />
          <Gap height={24} />
          <TextInter style={styles.succesInfo}>
            anda akan dihubungi bagian pemasaran Manado Post untuk
            konfirmasi/pembayaran Iklan ini{' '}
          </TextInter>
          <Gap height={24} />
          <Pressable
            style={styles.successButton}
            onPress={() => modalRef.current.close()}>
            <TextInter style={styles.successButtonLabel}>
              Kembali Ke Halaman Iklan
            </TextInter>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  body: {
    paddingTop: 19,
    paddingHorizontal: 30,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.MPGrey3,
  },

  browseContainer: {
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#E2E6EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  browseButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.grey1,
  },
  browseLabel: {
    color: theme.colors.fontLight,
  },
  browseNote: {
    color: theme.colors.grey1,
    marginTop: 10,
  },

  linkInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DFE8F566',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    paddingRight: 10,
  },
  linkInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 14,
  },

  calendarContainer: {
    flex: 1,
  },
  calendarLabel: {
    fontSize: 14,
    color: theme.colors.grey1,
    marginBottom: 4,
  },
  fieldContainer: {
    width: '100%',
    backgroundColor: theme.colors.MPWhite2,
    borderWidth: 1,
    borderColor: theme.colors.MPWhite,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeDate: {
    color: theme.colors.grey1,
    fontSize: 14,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  footerContainer: {
    backgroundColor: theme.colors.darkBright,
    paddingTop: 11,
    paddingHorizontal: 25,
    paddingBottom: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 12,
    fontFamily: theme.fonts.inter.medium,
    color: theme.colors.MPGrey3,
  },
  total: {
    fontSize: 20,
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.MPBlue1,
  },
  buyAdsButton: {
    paddingVertical: 13,
    backgroundColor: theme.colors.MPBlue2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyAdsLabel: {
    fontSize: 17,
    color: theme.colors.MPWhite,
    fontFamily: theme.fonts.inter.semiBold,
    paddingHorizontal: '10%',
  },

  successModalContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  successTitle: {
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.MPGrey3,
    fontSize: 24,
  },
  succesInfo: {
    fontSize: 16,
    color: theme.colors.MPGrey3,
    textAlign: 'center',
  },
  successButton: {
    backgroundColor: theme.colors.MPBlue2,
    borderRadius: 16,
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
  },
  successButtonLabel: {
    color: theme.colors.fontLight,
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 14,
  },
});
