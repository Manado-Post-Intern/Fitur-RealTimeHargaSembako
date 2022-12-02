import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {Banner2, Gap, TopBar} from '../../components';
import {screenHeightPercentage} from '../../utils';
import {theme} from '../../assets';
import {AreaSection, Story} from './components';

const story = ['Manado', 'Bitung', 'Tomohon', 'Minahasa', 'Minahasa Utara'];

const Region = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.topBarContainer}>
        <TopBar type="region" />
      </View>
      <ScrollView style={styles.container}>
        <Gap height={30} />

        <FlatList
          contentContainerStyle={styles.storyList}
          horizontal
          data={story}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => <Story key={index} />}
        />

        <Gap height={35} />

        <Banner2 />

        <Gap height={18} />

        <AreaSection />
        <AreaSection />

        <Gap height={screenHeightPercentage('11%')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Region;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  topBarContainer: {
    zIndex: 100,
  },
  container: {
    zIndex: 0,
    flex: 1,
    backgroundColor: theme.colors.white2,
    top: -20,
  },
  storyList: {
    paddingLeft: 17,
  },
});
