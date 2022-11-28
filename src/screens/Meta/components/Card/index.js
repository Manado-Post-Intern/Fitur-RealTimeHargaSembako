import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {IMGDummyNews, theme} from '../../../../assets';
import {Gap, TextInter} from '../../../../components';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={IMGDummyNews} />
        <TextInter style={styles.label}>Casabaio Resort</TextInter>
      </View>
      <Gap height={3} />
      <Pressable style={styles.button}>
        <TextInter>View</TextInter>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    margin: 4,
    borderRadius: 4,
    padding: 4,
    elevation: 5,
    shadowColor: 'rgba(1, 36, 69, 0.3)',
  },
  imageContainer: {
    height: 85,
  },
  image: {
    borderRadius: 4,
    height: '100%',
    width: '100%',
  },
  label: {
    position: 'absolute',
    bottom: 0,
    fontSize: 10,
    color: theme.colors.fontLight,
    fontFamily: theme.fonts.inter.semiBold,
    width: '100%',
    textAlign: 'center',
    marginBottom: 3,
  },
  button: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems: 'center',
    borderRadius: 3,
  },
});
