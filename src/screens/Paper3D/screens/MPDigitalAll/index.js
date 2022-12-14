import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, Pagination, TextInter, TopBar} from '../../../../components';
import {IcBack, theme} from '../../../../assets';
import {screenHeightPercentage} from '../../../../utils';
import Card from './Card';
import {useNavigation} from '@react-navigation/native';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MPDigitalAll = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.topBarContainer}>
        <TopBar type="paper" />
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Pressable onPress={() => navigation.goBack()}>
              <IcBack />
            </Pressable>
            <TextInter style={styles.headerText}>MP Digital</TextInter>
          </View>
        )}
        contentContainerStyle={styles.contentContainerStyle}
        data={data}
        numColumns={3}
        renderItem={({item, index}) => (
          <Card key={index} index={index} dataLength={data.length} />
        )}
      />

      <Pagination />
      <Gap height={30} />
    </>
  );
};

export default MPDigitalAll;

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
    marginLeft: 24 - 17,
    marginVertical: 12,
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: theme.colors.MPGrey2,
    fontWeight: '700',
  },
  contentContainerStyle: {
    paddingHorizontal: 17,
    paddingBottom: screenHeightPercentage('10.5%'),
  },
});
