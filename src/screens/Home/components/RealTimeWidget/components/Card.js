import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';

import {Card} from '@rneui/themed';

const Card = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const priceRef = database().ref('realTimePrice/cengkeh/price');

    const onValueChange = priceRef.on('value', snapshot => {
      const fetchedPrice = snapshot.val();
      setPrice(fetchedPrice);
    });

    return () => priceRef.off('value', onValueChange);
  }, []);

  return (
    <View>
      <Card>
        <Text style={styles.titleContainer}>Update Harga</Text>
        <Text style={styles.subtitleContainer}>Cengkeh</Text>
        <Text>Rp. {price}</Text>
      </Card>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 20,
  },
  subtitleContainer: {
    fontSize: 20,
  },
});
