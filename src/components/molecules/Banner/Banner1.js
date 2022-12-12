import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Gap, TextInter} from '../../atoms';
import {IcCrown, IMGIllJoin, theme} from '../../../assets';

const Banner1 = () => {
  return (
    <View style={styles.bannerContainer}>
      <LinearGradient
        style={styles.linearGradient}
        useAngle={true}
        angle={135}
        angleCenter={{x: 0.7, y: 0.7}}
        colors={['#054783', '#012445']}>
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
              <IcCrown />
            </Pressable>
          </View>
        </View>

        <View style={styles.illustrationContainer}>
          <Image style={styles.illustration} source={IMGIllJoin} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Banner1;

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
    color: '#33CFD9',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 12,
    width: 134,
    paddingVertical: 4,
    backgroundColor: '#23C3CD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 10,
    color: '#072948',
  },
  illustrationContainer: {
    flex: 1,
  },
  illustration: {
    width: 185,
    height: 138,
    position: 'absolute',
    top: -30,
    left: -20,
  },
});
