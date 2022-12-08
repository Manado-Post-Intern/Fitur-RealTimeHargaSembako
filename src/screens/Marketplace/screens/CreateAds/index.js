import {Pressable, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {IcBigCheckmark, IcCalendarGrey, theme} from '../../../../assets';
import {CheckBox, Gap, Switch, TextInter, TopBar} from '../../../../components';
import {Input} from '../../components';
import Dropdown from '../../components/Dropdown';
import {screenHeightPercentage} from '../../../../utils';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import ModalCalendar from '../../../../components/molecules/ModalCalendar';

const labelData = ['Otomotif', 'Properti', 'Lowongan', 'Ragam'];
const merkData = [
  'BMW',
  'Bajaj',
  'Chevrolet',
  'Daihatsu',
  'Honda',
  'Daihatsu',
  'Isuzu',
  'Jeep',
  'Kawasaki',
  'Kaisar',
  'Lexus',
];
const statusData = [
  'Dikontrakkan',
  'Dijual Cepat',
  'Dijual',
  'Disewakan',
  'Dicari / Hilang',
  'Menerima',
  'Ditemukan',
];

const CreateAds = () => {
  const [label, setLabel] = useState(0);
  const [merk, setMerk] = useState(0);

  const [status, setStatus] = useState(0);
  const [calendarModal, setCalendarModal] = useState(false);

  const [terms, setTerms] = useState(false);
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
      <View style={styles.topBarContainer}>
        <TopBar type="order" />
      </View>
      <ScrollView
        style={styles.innerContainer}
        contentContainerStyle={styles.innerContentContainer}>
        <Gap height={19} />
        <View style={styles.voucherContainer}>
          <TextInter style={styles.voucherText}>
            Menggunakan gratis pasang iklan
          </TextInter>
          <Switch />
          <TextInter style={styles.voucherLeft}>sisa : 2</TextInter>
        </View>
        <Gap height={16} />
        <TextInter style={styles.title}>Pasang Iklan</TextInter>
        <Gap height={16} />
        <View style={styles.browseContainer}>
          <Pressable style={styles.browseButton}>
            <TextInter style={styles.browseLabel}>browse picture</TextInter>
          </Pressable>
        </View>
        <Gap height={20} />
        <Input placeholder="Nama Barang / Properti / Perkerjaan" />
        <Gap height={16} />
        <Input
          placeholder="Deskripsi (bisa tidak diisi)"
          isDescription={true}
        />
        <Gap height={16} />
        <Input placeholder="Harga Dalam Rupiah" />
        <Gap height={16} />
        <Input placeholder="Nomor Kontak Whatsapp" />
        <Gap height={16} />
        <Input placeholder="Alamat (bisa tidak diisi)" />
        <Gap height={16} />
        <View style={styles.labelAndMerkContainer}>
          <Dropdown
            data={labelData}
            width="40%"
            label="Label"
            activeItem={label}
            setItem={setLabel}
          />
          <Gap width={32} />
          <Dropdown
            data={merkData}
            label="Merk"
            activeItem={merk}
            setItem={setMerk}
          />
        </View>
        <Gap height={16} />
        <Dropdown
          data={statusData}
          //   width="30%"
          label="Status"
          activeItem={status}
          setItem={setStatus}
        />
        <Gap height={16} />
        <View style={styles.highlightOptionContainer}>
          <View style={styles.highlightSwitchContainer}>
            <View style={styles.switchContainer}>
              <TextInter style={styles.highlightTop}>
                Pasang Higlight Ads
              </TextInter>
              <TextInter style={styles.highlightBottom}>
                Tambah Rp 20k / Hari
              </TextInter>
            </View>
            <Gap width={16} />

            <Switch />
          </View>
          <View style={styles.highlightDuration}>
            <TextInter style={styles.highlightTop}>Durasi (Hari)</TextInter>
            <Gap height={4} />
            <TextInput style={styles.durationInput} />
          </View>
        </View>

        <View style={styles.dateContainer}>
          <View style={styles.dateLeftContainer}>
            <TextInter style={styles.dateTitle}>
              Jadwalkan tanggal mulai
            </TextInter>
            <Gap height={4} />
            <Pressable
              style={styles.fieldContainer}
              onPress={() => setCalendarModal(true)}>
              <TextInter style={styles.activeDate}>1 Januari 2023</TextInter>
              <IcCalendarGrey />
            </Pressable>
          </View>
          <View style={styles.dateRightContainer}>
            <View>
              <TextInter style={styles.dateTitle}>
                Mulai saat ini juga
              </TextInter>
              <Gap height={4} />
              <Switch />
            </View>
          </View>
        </View>
        <Gap height={16} />
        <Pressable
          style={styles.termsContainer}
          onPress={() => setTerms(!terms)}>
          <TextInter style={styles.terms}>
            Setujui{' '}
            <TextInter style={styles.bold}>syarat dan ketentuan</TextInter>{' '}
            beriklan
          </TextInter>
          <Gap width={8} />
          <CheckBox isChecked={terms} />
        </Pressable>

        <Gap height={screenHeightPercentage('5%')} />
      </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.footerLeftContainer}>
          <TextInter style={styles.footerTotal}>total</TextInter>
          <TextInter style={styles.price}>Rp. 1.560.000</TextInter>
        </View>
        <Pressable
          style={styles.footerButton}
          onPress={() => modalRef.current.expand()}>
          <TextInter style={styles.footerButtonLabel}>Pasang Iklan</TextInter>
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
            Iklan Berhasil di Upload
          </TextInter>
          <Gap height={24} />
          <IcBigCheckmark />
          <Gap height={24} />
          <TextInter style={styles.succesInfo}>
            anda akan dihubungi bagian pemasaran Manado Post untuk
            konfirmasi/pembayaran Iklan ini
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

export default CreateAds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  topBarContainer: {
    zIndex: 10,
  },

  innerContainer: {
    flex: 1,
  },
  innerContentContainer: {
    paddingHorizontal: 24,
  },
  voucherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.MPWhite,
  },
  voucherText: {
    fontSize: 13,
    color: theme.colors.grey1,
  },
  voucherLeft: {
    fontSize: 13,
    color: '#F35656',
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
    paddingVertical: 47,
  },
  browseButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.grey1,
  },
  browseLabel: {
    color: theme.colors.fontLight,
  },

  labelAndMerkContainer: {
    flexDirection: 'row',
  },

  highlightOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: theme.colors.MPWhite,
    borderTopWidth: 1,
    borderBottomColor: theme.colors.MPWhite,
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  highlightSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 7,
  },
  highlightTop: {
    fontSize: 14,
    color: theme.colors.grey1,
  },
  highlightBottom: {
    fontSize: 12,
    color: '#617D9780',
  },
  highlightDuration: {
    flex: 3,
  },
  durationInput: {
    height: 25,
    width: 49,
    backgroundColor: theme.colors.MPWhite2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.MPWhite,
    padding: 0,
    textAlign: 'center',
  },

  dateContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomColor: theme.colors.MPWhite,
    borderBottomWidth: 1,
  },
  dateTitle: {
    fontSize: 14,
    color: theme.colors.grey1,
  },
  dateLeftContainer: {
    flex: 1,
  },
  dateRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  terms: {
    fontSize: 14,
    color: theme.colors.grey1,
  },
  bold: {
    fontSize: 14,
    color: theme.colors.grey1,
    fontFamily: theme.fonts.inter.bold,
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

  footerContainer: {
    flexDirection: 'row',
    paddingTop: 11,
    backgroundColor: theme.colors.MPWhite,
    paddingHorizontal: 20,
    paddingBottom: 29,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLeftContainer: {
    flex: 1,
  },
  footerButton: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: theme.colors.MPBlue2,
    justifyContent: 'center',
    paddingVertical: 13.5,
    alignItems: 'center',
  },
  footerButtonLabel: {
    fontSize: 17,
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.MPWhite,
  },

  footerTotal: {
    fontSize: 12,
    color: theme.colors.MPGrey3,
    fontFamily: theme.fonts.inter.medium,
  },
  price: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 20,
    color: theme.colors.MPBlue1,
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
