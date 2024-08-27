import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View>
      <Text style={styles.titleContainer}>Update Harga</Text>
      <Text>Cengkeh</Text>
      <Text>Rp. 78</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 10,
  },
});
