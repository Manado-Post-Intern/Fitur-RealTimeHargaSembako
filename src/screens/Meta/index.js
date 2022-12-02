import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Gap, NotFound, TextInter, TopBar} from '../../components';
import {
  IcBack,
  IMGCallUsBanner,
  IMGHotelBestWestern,
  theme,
} from '../../assets';
import {
  BannerSection,
  Card,
  Categories,
  Detail,
  TrendingSection,
} from './components';
import {screenHeightPercentage} from '../../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Meta = () => {
  const [detail, setDetail] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.topBarContainer}>
        <TopBar type="meta" />
      </View>
      <ScrollView style={styles.container}>
        {detail ? (
          <Detail />
        ) : (
          <>
            <View style={styles.bodyContainer}>
              <View style={styles.headerContainer}>
                <IcBack />
                <TextInter style={styles.headerText}>Meta</TextInter>
              </View>
              <Gap height={6} />
              <Categories />
              <Gap height={32} />
              <BannerSection />
              <TrendingSection />
              <Gap height={10} />

              <Image style={styles.callUsBanner} source={IMGCallUsBanner} />
            </View>

            <View style={styles.bodyContainer}>
              <View style={styles.headerContainer}>
                <IcBack />
                <TextInter style={styles.headerText}>Hotel & Resort</TextInter>
              </View>
              <View style={styles.cardListContainer}>
                <FlatList
                  data={data}
                  numColumns={3}
                  renderItem={({item, index}) => (
                    <Card setDetail={setDetail} key={index} />
                  )}
                />
              </View>
            </View>
          </>
        )}
        <NotFound />

        <Gap height={screenHeightPercentage('15%')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Meta;

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
  callUsContainer: {
    width: '100%',
    height: 100,
  },
  callUsBanner: {
    width: 401,
    height: 120,
    resizeMode: 'cover',
  },
});
