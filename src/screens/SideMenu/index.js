import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {screenHeightPercentage} from '../../utils';
import {
  theme,
  IMGDummyProfile,
  IcEdit,
  IcWriteNews,
  IcSubscription,
  IcMarketplace,
  IcAds,
  IcAboutUs,
  IcLogout,
} from '../../assets';
import {Gap, TextInter} from '../../components';
import {useNavigation} from '@react-navigation/native';

const SideMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.profileImage} source={IMGDummyProfile} />
        <Gap width={16} />
        <View style={styles.headerTextContainer}>
          <View>
            <TextInter style={styles.name}>Cameron Williamson</TextInter>
            <TextInter style={styles.email}>
              jessica.hanson@example.com
            </TextInter>
          </View>
          <Gap width={16} />
          <Pressable
            style={styles.editButton}
            onPress={() => navigation.navigate('Profile')}>
            <IcEdit />
          </Pressable>
        </View>
      </View>

      <Gap height={16} />

      <View style={styles.sectionContainer}>
        <Pressable style={[styles.section, styles.bottomBorder]}>
          <IcWriteNews />
          <Gap width={10} />
          <TextInter style={styles.sectionLabel}>Tulis Berita</TextInter>
        </Pressable>
        <Pressable
          style={styles.section}
          onPress={() => navigation.navigate('Subscription')}>
          <IcSubscription />
          <Gap width={10} />
          <TextInter style={styles.sectionLabel}>Berlangganan</TextInter>
        </Pressable>
        <Pressable
          style={styles.section}
          onPress={() => navigation.navigate('Marketplace')}>
          <IcMarketplace />
          <Gap width={10} />
          <TextInter style={styles.sectionLabel}>Marketplace</TextInter>
        </Pressable>
        <Pressable
          style={[styles.section, styles.bottomBorder]}
          onPress={() => navigation.navigate('Ads')}>
          <IcAds />
          <Gap width={10} />
          <TextInter style={styles.sectionLabel}>Pasang Iklan</TextInter>
        </Pressable>
        <Pressable
          style={styles.section}
          onPress={() => navigation.navigate('AboutUs')}>
          <IcAboutUs />
          <Gap width={10} />
          <TextInter style={styles.sectionLabel}>Tentang Kami</TextInter>
        </Pressable>
        <Pressable style={styles.section}>
          <IcLogout />
          <Gap width={10} />
          <TextInter style={styles.sectionLabel}>Logout</TextInter>
        </Pressable>
      </View>

      <View style={styles.footerContainer}>
        <TextInter style={styles.footerText}>
          Copyright by Manado Post 2022
        </TextInter>
        <TextInter style={styles.footerText}>V. 2.1.0</TextInter>
      </View>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 38,
    paddingTop: screenHeightPercentage('5%'),
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.darkBright,
    paddingBottom: 16,
    backgroundColor: 'yellow',
    width: '100%',
  },
  profileImage: {
    borderRadius: 100,
    width: 75,
    height: 75,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 16,
    color: theme.colors.MPBlue0,
  },
  email: {
    fontSize: 12,
    color: theme.colors.grey1,
  },
  editButton: {
    borderRadius: 8,
    backgroundColor: theme.colors.MPGrey2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },

  sectionContainer: {
    width: '60%',
    flex: 1,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  sectionLabel: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.medium,
    color: theme.colors.grey1,
  },
  bottomBorder: {
    borderBottomColor: theme.colors.darkBright,
    borderBottomWidth: 1,
    paddingBottom: 12,
  },

  footerContainer: {
    paddingTop: 8,
    paddingHorizontal: 4,
    borderTopColor: theme.colors.darkBright,
    borderTopWidth: 1,
    marginBottom: screenHeightPercentage('5%'),
  },
  footerText: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 14,
    color: theme.colors.grey1,
  },
});
