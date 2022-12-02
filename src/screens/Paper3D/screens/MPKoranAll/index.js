import {FlatList, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, Pagination, TextInter, TopBar} from '../../../../components';
import {IcBack, theme} from '../../../../assets';
import {screenHeightPercentage} from '../../../../utils';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MPKoranAll = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBarContainer}>
        <TopBar type="paper" />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <Pressable onPress={() => navigation.goBack()}>
            <IcBack />
          </Pressable>
          <TextInter style={styles.headerText}>MP Koran</TextInter>
        </View>

        <Gap height={12} />

        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            numColumns={3}
            renderItem={({item, index}) => (
              <Card key={index} index={index} dataLength={data.length} />
            )}
          />
        </View>
      </View>

      <Pagination />

      <Gap height={screenHeightPercentage('15%')} />
    </ScrollView>
  );
};

export default MPKoranAll;

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

  flatListContainer: {
    paddingHorizontal: 17,
  },
});
