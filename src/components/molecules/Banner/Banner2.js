import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Gap, TextInter} from '../../atoms';
import {IcCrownWhite, IMGIllJoin2, theme} from '../../../assets';

const Banner2 = () => {
  return (
    <View style={styles.bannerContainer}>
      <LinearGradient
        style={styles.linearGradient}
        useAngle={true}
        angle={135}
        angleCenter={{x: 0.7, y: 0.7}}
        colors={['#0A1926', '#0A131C']}>
        <View style={styles.innerBannerContainer}>
          <View style={styles.textContainer}>
            <TextInter style={styles.text}>
              Gabung MPeople dan{'\n'}
              <TextInter style={styles.textSpecial}>
                akses ePaper exclusive
              </TextInter>
              {'\n'}Manado Post
            </TextInter>

            <Gap height={4} />

            <Pressable style={styles.button}>
              <TextInter style={styles.label}>Gabung Sekarang</TextInter>
              <Gap width={4} />
              <IcCrownWhite />
            </Pressable>
          </View>
        </View>

        <View style={styles.illustrationContainer}>
          <Image style={styles.illustration} source={IMGIllJoin2} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Banner2;

const styles = StyleSheet.create({
  bannerContainer: {
    height: 99,
    paddingHorizontal: 16,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 4,
    paddingHorizontal: 24,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  innerBannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: 162,
  },
  text: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.MPWhite2,
  },
  textSpecial: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.semiBold,
    color: '#FCB900',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 12,
    width: 134,
    paddingVertical: 4,
    backgroundColor: theme.colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 10,
    color: theme.colors.white,
  },
  illustrationContainer: {
    flex: 1,
  },
  illustration: {
    width: 144,
    height: 144,
    position: 'absolute',
    top: -30,
  },
});
