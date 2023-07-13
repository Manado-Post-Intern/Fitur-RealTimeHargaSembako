import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IMGMPTextPrimary, IcBack, IcMagnifying, theme} from '../../assets';
import {TextInter} from '../../components';
import {Card} from './components';
import {useNavigation} from '@react-navigation/native';

const SPACING = 10;

const MoreNews = ({label}) => {
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
        <Image
          source={IMGMPTextPrimary}
          style={{
            resizeMode: 'contain',
            width: '35%',
            height: 50,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <IcMagnifying />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.labelContainer}>
          <TextInter style={styles.label}>Label</TextInter>
        </View>

        <View>
          {[...Array(5).keys()].map((_, index) => {
            return <Card />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreNews;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.white2},
  headerContainer: {
    backgroundColor: theme.colors.white,
    paddingVertical: SPACING,
    paddingHorizontal: SPACING * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContainer: {marginTop: SPACING * 2, marginBottom: SPACING},
  label: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: theme.colors.MPGrey2,
    fontWeight: '700',
    marginLeft: 16,
  },
});
