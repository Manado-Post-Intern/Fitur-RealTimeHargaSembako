import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {theme} from '../../assets';
import {Banner1, Gap} from '../../components';
import {TrendingSection} from './components';
import {screenHeightPercentage} from '../../utils';

const Trending = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <Gap height={40} />

        <Banner1 />

        <Gap height={18} />

        <TrendingSection />

        <Gap height={screenHeightPercentage('11%')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trending;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container: {
    zIndex: 0,
    flex: 1,
    backgroundColor: theme.colors.white2,
    top: -20,
  },
});
