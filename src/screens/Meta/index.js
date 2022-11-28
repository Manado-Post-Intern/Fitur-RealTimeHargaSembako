import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, TextInter, TopBar} from '../../components';
import {IcBack, theme} from '../../assets';
import {Card, Categories} from './components';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Meta = () => {
  return (
    <View>
      <View style={styles.topBarContainer}>
        <TopBar type="meta" />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <IcBack />
          <TextInter style={styles.headerText}>Meta</TextInter>
        </View>
        <Gap height={6} />
        <Categories />
      </View>
      {/* <View style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <IcBack />
          <TextInter style={styles.headerText}>Hotel & Resort</TextInter>
        </View>
        <View style={styles.cardListContainer}>
          <FlatList
            data={data}
            numColumns={3}
            renderItem={({item, index}) => <Card key={index} />}
          />
        </View>
      </View> */}
    </View>
  );
};

export default Meta;

const styles = StyleSheet.create({
  topBarContainer: {
    zIndex: 100,
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
});
