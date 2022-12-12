import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {
  IcEdit,
  IcGoldCheckmark,
  IMGDummyProfile,
  theme,
  IMGSubscription1Month,
  IMGSubscription6Month,
  IMGSubscription1Year,
} from '../../assets';
import {ChevroletBackButton, Gap, TextInter} from '../../components';
import {screenHeightPercentage} from '../../utils';

const Subscription = () => {
  const navigation = useNavigation();
  const subscribed = true;
  const shortTimeLeft = true;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChevroletBackButton />
        <TextInter style={styles.title}>Subscription</TextInter>
        <View style={styles.hide}>
          <ChevroletBackButton />
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.profileHeaderContainer}>
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

        <Gap height={8} />

        {shortTimeLeft && (
          <View style={styles.extendContainer}>
            <TextInter style={styles.subscribedLeft}>
              Langganan akan habis dalam 1 hari lagi.
            </TextInter>
            <Pressable style={styles.extendButton}>
              <TextInter style={styles.subscribedLeft}>Perpanjang</TextInter>
            </Pressable>
          </View>
        )}

        {subscribed && !shortTimeLeft && (
          <View style={styles.subscribedContainer}>
            <TextInter style={styles.subscribedLeft}>
              Langganan akan habis dalam 28 hari lagi.
            </TextInter>
          </View>
        )}

        <TextInter style={styles.text1}>
          {subscribed ? 'Upgrade Berlangganan' : 'Berlangganan'}{' '}
          <TextInter style={styles.specialText1}>
            Manado Post Digital Premium
          </TextInter>
        </TextInter>

        <Gap height={8} />

        <View style={styles.benefitWrapper}>
          <View style={styles.benefitContainer}>
            <IcGoldCheckmark />
            <Gap width={8} />
            <TextInter style={styles.benefit}>
              Akses e-koran terupdate setiap hari
            </TextInter>
          </View>
        </View>

        <View style={styles.benefitWrapper}>
          <View style={styles.benefitContainer}>
            <IcGoldCheckmark />
            <Gap width={8} />
            <TextInter style={styles.benefit}>
              Berkesempatan mendapatkan undian yang di undi setiap bulan
            </TextInter>
          </View>
        </View>

        <View style={styles.benefitWrapper}>
          <View style={styles.benefitContainer}>
            <IcGoldCheckmark />
            <Gap width={8} />
            <TextInter style={styles.benefit}>
              Mendapatkan promo khusus
            </TextInter>
          </View>
        </View>

        <View>
          <Pressable style={styles.subscriptionBannerContainer}>
            <Image
              style={styles.subscriptionBanner}
              source={IMGSubscription1Month}
            />
          </Pressable>
          <Pressable style={styles.subscriptionBannerContainer}>
            <Image
              style={styles.subscriptionBanner}
              source={IMGSubscription6Month}
            />
          </Pressable>
          <Pressable style={styles.subscriptionBannerContainer}>
            <Image
              style={styles.subscriptionBanner}
              source={IMGSubscription1Year}
            />
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.stopSubscribeButton}>
        <TextInter style={styles.stopSubscribe}>
          Tidak ingin berlangganan lagi ?{' '}
          <TextInter style={styles.stopSubscribeBold}>Unsubscribe</TextInter>
        </TextInter>
      </Pressable>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: screenHeightPercentage('5%'),
  },

  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: theme.colors.MPGrey2,
  },
  hide: {
    opacity: 0,
  },

  bodyContainer: {
    marginHorizontal: 24,
    flex: 1,
  },
  profileHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.darkBright,
    paddingBottom: 16,
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

  extendContainer: {
    backgroundColor: '#FF6767',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  extendButton: {
    backgroundColor: theme.colors.MPBlue0,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },

  subscribedContainer: {
    width: '100%',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.grey1,
    marginBottom: 8,
  },
  subscribedLeft: {
    fontSize: 12,
    color: theme.colors.fontLight,
  },

  text1: {
    fontSize: 14,
    color: theme.colors.grey1,
  },
  specialText1: {
    fontSize: 14,
    color: theme.colors.MPBlue1,
    fontFamily: theme.fonts.inter.semiBold,
  },

  benefitWrapper: {
    alignSelf: 'flex-start',
    maxWidth: '100%',
  },
  benefitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#EFEEEE',
    borderRadius: 4,
    marginBottom: 8,
  },
  benefit: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.medium,
    color: theme.colors.grey1,
    flexShrink: 1,
  },

  subscriptionBannerContainer: {
    height: 100,
  },
  subscriptionBanner: {
    width: '100%',
    maxHeight: 100,
    resizeMode: 'contain',
  },

  stopSubscribeButton: {
    marginBottom: screenHeightPercentage('3%'),
  },
  stopSubscribe: {
    fontSize: 14,
    color: theme.colors.grey1,
    textAlign: 'center',
  },
  stopSubscribeBold: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.MPBlue1,
  },
});
