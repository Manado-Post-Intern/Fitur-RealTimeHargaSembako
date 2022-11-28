import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, TextInter, TopBar} from '../../components';
import {IcBack, IMGIllNotFound, theme} from '../../assets';
import {AreaSection} from '../Region/components';
import {screenHeightPercentage} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();

  const notFound = true;

  if (notFound) {
    return (
      <>
        <TopBar />
        <View style={styles.container}>
          <View style={styles.notFoundContainer}>
            <Image style={styles.notFoundIll} source={IMGIllNotFound} />
            <TextInter style={styles.sorry}>Maaf</TextInter>
            <TextInter style={styles.notFound}>
              Tidak ada berita terkait pencarian anda
            </TextInter>
          </View>
          <View style={styles.actionContainer}>
            <Button
              // eslint-disable-next-line react-native/no-inline-styles
              style={{backgroundColor: '#0547831A'}}
              type="secondary"
              label="Kembali ke Halaman Sebelumnya"
              onPress={() => navigation.goBack()}
            />
            <Gap height={8} />
            <Button
              label="Kembali ke Beranda"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TopBar searchOnly={true} />

      <>
        <Gap height={14} />
        <View style={styles.informationContainer}>
          <IcBack />

          <Gap height={8} />

          <TextInter style={styles.information}>
            Hasil pencarian berita untuk ‘M’
          </TextInter>
        </View>
        <Gap height={18} />
        <AreaSection />
      </>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.MPWhite2,
  },
  informationContainer: {
    paddingHorizontal: 12,
    marginHorizontal: 17,
  },
  information: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.medium,
    color: '#969696',
  },

  notFoundContainer: {
    alignItems: 'center',
    paddingHorizontal: 44,
    marginTop: 60,
  },
  notFoundIll: {
    width: 270,
    height: 212,
  },
  sorry: {
    fontFamily: theme.fonts.inter.bold,
    fontSize: 24,
    color: '#7D7979',
  },
  notFound: {
    fontSize: 24,
    color: '#7D7979',
    textAlign: 'center',
  },

  actionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: screenHeightPercentage('5%'),
  },
});
