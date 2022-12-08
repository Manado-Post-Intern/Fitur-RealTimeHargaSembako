import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IcXSmall, theme} from '../../../../../../assets';
import {Gap, TextInter} from '../../../../../../components';
import CheckBox from '../../../../../Home/components/NewsForYou/components/CanalModal/components/Checkbox';
import OptionRow from './OptionRow';

const data = ['Home', 'Daerah'];
const dataAll = [
  'Home',
  'Trending',
  'Daerah',
  'International',
  'Nasional',
  'Eksbis',
  'Hukum',
];

const Position = ({label}) => {
  const [choosed, setChoosed] = useState([]);
  const [positionOption, setPositionOption] = useState(false);

  const handleCheck = item => {
    if (!choosed.includes(item)) {
      setChoosed([...choosed, item]);
    } else {
      setChoosed(choosed.filter(x => x !== item));
    }
  };
  return (
    <View>
      <Text style={styles.label}>Position</Text>
      <View>
        <Pressable onPress={() => setPositionOption(!positionOption)}>
          <FlatList
            style={styles.fieldContainer}
            horizontal
            data={choosed}
            renderItem={({item, index}) => (
              <Pressable
                style={styles.itemContainer}
                key={index}
                onPress={() => handleCheck(item)}>
                <TextInter style={styles.itemLabel}>{item}</TextInter>
                <Gap width={4} />
                <IcXSmall />
              </Pressable>
            )}
          />
        </Pressable>
        {positionOption && (
          <View style={styles.optionContainer}>
            <FlatList
              data={dataAll}
              renderItem={({item, index}) => (
                <OptionRow
                  index={index}
                  item={item}
                  setActive={setChoosed}
                  activeList={choosed}
                />
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: theme.colors.grey1,
    marginBottom: 4,
  },

  fieldContainer: {
    width: '100%',
    backgroundColor: theme.colors.MPWhite2,
    borderWidth: 1,
    borderColor: theme.colors.MPWhite,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 40,
  },
  itemContainer: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 4,
  },
  itemLabel: {
    color: theme.colors.grey1,
    fontSize: 14,
  },

  optionContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    elevation: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    width: '100%',
    top: '100%',
    zIndex: 100,
  },
});
