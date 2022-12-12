import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Banner1, Gap, More, TextInter, TopBar} from '../../components';
import {IcBack, theme} from '../../assets';
import {CardListDigital, CardListNewspaper} from './components';
import {screenHeightPercentage} from '../../utils';

const Paper3D = () => {
  return (
    <SafeAreaView>
      <View style={styles.topBarContainer}>
        <TopBar type="paper" />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.headerContainer}>
            <IcBack />
            <TextInter style={styles.headerText}>E-Paper</TextInter>
          </View>
          <Banner1 />
          <Gap height={8} />
          <View>
            <View style={styles.titleContainer}>
              <TextInter style={styles.title}>MP Digital</TextInter>
            </View>
            <Gap height={8} />
            <CardListDigital />
            <Gap height={4} />
            <View style={styles.moreContainer}>
              <More screen="MPDigitalAll" />
            </View>
          </View>

          <View>
            <View style={styles.titleContainer}>
              <TextInter style={styles.title}>MP Koran</TextInter>
            </View>
            <Gap height={8} />
            <CardListNewspaper />
            <Gap height={4} />
            <View style={styles.moreContainer}>
              <More screen="MPKoranAll" />
            </View>
          </View>
        </View>

        <Gap height={screenHeightPercentage('19%')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Paper3D;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white2,
  },
  topBarContainer: {
    zIndex: 100,
  },

  bodyContainer: {
    paddingTop: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: theme.colors.MPGrey2,
    fontWeight: '700',
  },

  titleContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: theme.colors.MPGrey2,
    fontWeight: '700',
    marginLeft: 16,
  },
});
