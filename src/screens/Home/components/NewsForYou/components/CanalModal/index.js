import {StyleSheet, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {Gap, TextInter} from '../../../../../../components';
import {theme} from '../../../../../../assets';
import {SelectionRow} from './components';
import {screenHeightPercentage} from '../../../../../../utils';
import {ScrollView} from 'react-native-gesture-handler';

const data = [
  'News',
  'Politik',
  'Budaya',
  'Pendidikan',
  'Entertainment',
  'Sport',
  'Daerah',
  'Internasional',
  'Bisnis',
  'Daerah',
  'Internasional',
  'Internasional',
  'Internasional',
  'Internasional',
  'Internasional',
  'Internasional',
];

const CanalModal = ({canalModalRef}) => {
  const [choosed, setChoosed] = useState([]);

  const snapPoints = useMemo(() => ['50%', '80%'], []);
  const renderBackdrop = useCallback(
    props => <BottomSheetBackdrop pressBehavior="close" {...props} />,
    [],
  );

  return (
    <BottomSheetModal
      ref={canalModalRef}
      index={1}
      snapPoints={snapPoints}
      enableHandlePanningGesture={false}
      enableContentPanningGesture={false}
      backdropComponent={renderBackdrop}>
      <View style={styles.container}>
        <TextInter style={styles.title}>Tambah Kanal</TextInter>
        <Gap height={22} />
        <ScrollView style={styles.scrollView}>
          {data.map((item, i) => (
            <SelectionRow
              key={i}
              item={item}
              setActive={setChoosed}
              activeList={choosed}
            />
          ))}
        </ScrollView>
      </View>
    </BottomSheetModal>
  );
};

export default CanalModal;

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 24,
    color: theme.colors.MPGrey3,
    marginLeft: 28,
  },
  scrollView: {
    height: screenHeightPercentage('65%'),
    paddingHorizontal: 28,
  },
});
