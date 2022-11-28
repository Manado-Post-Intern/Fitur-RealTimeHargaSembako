import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {theme} from '../../assets';
import {Gap, TopBar} from '../../components';
import {
  ActionSection,
  Headlines,
  LatestNews,
  MPDigital,
  MPNewspaper,
  NewsForYou,
  Story,
} from './components';
import {screenHeightPercentage} from '../../utils';
import {Card as CardNews} from './components/NewsForYou/components';
import {TrendingSection} from '../Trending/components';
import CanalModal from './components/NewsForYou/components/CanalModal';

const data = [0, 1, 2];

const Home = () => {
  const canalModalRef = useRef();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ScrollView style={styles.bodyContainer}>
          <Gap height={36} />

          <Story />

          <Gap height={12} />

          <ActionSection />

          <Gap height={12} />

          <Headlines />

          <Gap height={12} />

          <NewsForYou canalModalRef={canalModalRef} />

          <Gap height={12} />

          <LatestNews />

          <Gap height={12} />

          <TrendingSection />

          <Gap height={12} />

          <MPDigital />

          <Gap height={12} />

          {data.map((item, i) => (
            <CardNews key={i} />
          ))}

          <Gap height={12} />

          <MPNewspaper />

          <Gap height={screenHeightPercentage('11%')} />
        </ScrollView>

        <CanalModal canalModalRef={canalModalRef} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container: {
    zIndex: 0,
    flex: 1,
    backgroundColor: theme.colors.white2,
  },

  bodyContainer: {
    top: -20,
  },
});
