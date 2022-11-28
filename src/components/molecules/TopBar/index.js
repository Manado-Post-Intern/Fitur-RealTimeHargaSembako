import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {createRef, useEffect, useState} from 'react';
import {IcMagnifying, IcSort, IMGMPTextPrimary, theme} from '../../../assets';
import {Gap} from '../../atoms';
import {Category, Input, InputMeta} from './components';

const dummy = ['Terbaru', 'Politik', 'Daerah', 'Pendidikan'];

const TopBar = ({searchOnly, type}) => {
  const [active, setActive] = useState(0);
  const [activeSearch, setActiveSearch] = useState(false);

  const [searching, setSearching] = useState(false);

  const searchRef = createRef(null);

  useEffect(() => {
    searchRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSearch, searchRef.current]);
  switch (type) {
    case 'meta':
      return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image style={styles.image} source={IMGMPTextPrimary} />
            <View style={styles.topActionContainer}>
              {!activeSearch && (
                <Pressable
                  onPress={() => {
                    setActiveSearch(true);
                  }}>
                  <IcMagnifying />
                </Pressable>
              )}
              <Gap width={24} />
              <Pressable>
                <IcSort />
              </Pressable>
            </View>
          </View>

          {activeSearch && <InputMeta />}
        </View>
      );
    default:
      return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image style={styles.image} source={IMGMPTextPrimary} />
            <View style={styles.topActionContainer}>
              {!activeSearch && !searchOnly && (
                <Pressable
                  onPress={() => {
                    setActiveSearch(true);
                  }}>
                  <IcMagnifying />
                </Pressable>
              )}
              <Gap width={24} />
              <Pressable>
                <IcSort />
              </Pressable>
            </View>
          </View>

          {!searchOnly && (
            <Category dummy={dummy} active={active} setActive={setActive} />
          )}

          {(activeSearch || searchOnly) && (
            <Input
              searchRef={searchRef}
              setSearching={setSearching}
              searching={searching}
              setActiveSearch={setActiveSearch}
              searchOnly={searchOnly}
            />
          )}
          <Gap height={15} />
        </View>
      );
  }
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 139,
    resizeMode: 'contain',
  },
  topActionContainer: {
    flexDirection: 'row',
  },
});
