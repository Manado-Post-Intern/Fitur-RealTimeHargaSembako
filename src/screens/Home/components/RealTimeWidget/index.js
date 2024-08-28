import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {theme} from '../../../../assets';
import {Card} from '@rneui/themed';
import database from '@react-native-firebase/database';
import {IcGreenIndicator, IcRedIndicator} from '../../../../assets';
import {IMGCengkeh} from '../../../../assets';

const RealTimeWidget = () => {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [oldPrice, setOldPrice] = useState(null);

  useEffect(() => {
    const priceRef = database().ref('realTimePrice/cengkeh');

    const onValueChange = priceRef.on('value', snapshot => {
      const data = snapshot.val();
      setCurrentPrice(data?.currentPrice);
      setOldPrice(data?.oldPrice);
    });

    return () => priceRef.off('value', onValueChange);
  }, []);

  const formatPrice = price => {
    if (!price) return '';
    if (price >= 100000 && price % 1000 === 0) {
      return `${(price / 1000).toLocaleString('id-ID')}rb`;
    }
    return price.toLocaleString('id-ID');
  };

  const formattedPrice = formatPrice(currentPrice);

  const renderIndicator = () => {
    if (currentPrice > oldPrice) {
      return <IcGreenIndicator style={styles.icon} />;
    } else if (currentPrice < oldPrice) {
      return <IcRedIndicator style={styles.icon} />;
    }
    return null;
  };

  return (
    <View>
      <Card
        containerStyle={{
          borderRadius: 16,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderColor: '#C1D8DD',
        }}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.titleContainer}>Update Harga</Text>
            <Text style={styles.subtitleContainer}>Cengkeh</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Rp.{formattedPrice}</Text>
              {renderIndicator()}
            </View>
          </View>
          <Image source={IMGCengkeh} style={styles.image} />
        </View>
      </Card>
    </View>
  );
};

export default RealTimeWidget;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    fontSize: 20,
    color: '#054783',
    fontWeight: '600',
  },
  subtitleContainer: {
    fontSize: 15,
    color: '#626262',
    fontWeight: '600',
    marginLeft: 8,
    marginVertical: 8,
  },
  price: {
    fontSize: 30,
    fontWeight: '800',
    color: '#373737',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
