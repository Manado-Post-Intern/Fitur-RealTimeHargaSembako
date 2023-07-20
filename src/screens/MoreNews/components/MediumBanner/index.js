import {FlatList, Image, LogBox, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const HEIGHT = 300;
const WIDTH = 300;
const SPACING = 5;

const MediumBanner = ({item}) => {
  const [index, setIndex] = useState(0);
  const [onDrag, setOnDrag] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!onDrag) {
      ref.current.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      });
    }
    const intervalId = setInterval(() => {
      if (index === item?.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [index, onDrag]);

  return (
    <FlatList
      onScrollBeginDrag={() => {
        setOnDrag(true);
      }}
      onScrollEndDrag={e => {
        const newIndex = Math.round(e.nativeEvent.contentOffset.x / WIDTH);
        setOnDrag(false);
        setIndex(newIndex);
      }}
      ref={ref}
      data={item}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({item}) => <Banner item={item} />}
    />
  );
};

const Banner = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item?.imageUri}} style={styles.image} />
    </View>
  );
};

export default MediumBanner;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
    height: HEIGHT,
    width: WIDTH,
    resizeMode: 'cover',
  },
});
