import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {IMGMinahasaLogo, IMGStoryDummy, theme} from '../../../../../../assets';
import {TextInter} from '../../../../../../components';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({item, region}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Article', {articleId: item?.id})}
        style={styles.picture}>
        <Image
          source={{uri: item?.photo_url}}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
        <LinearGradient
          locations={[0, 0.9]}
          start={{x: 0, y: -0.5}}
          end={{x: 0, y: 1.3}}
          colors={['transparent', 'black']}
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            paddingHorizontal: 8,
          }}>
          <TextInter
            style={{color: 'white', paddingVertical: 5}}
            numberOfLines={3}>
            {item?.title}
          </TextInter>
        </LinearGradient>
      </Pressable>
      <View style={styles.innerContainer}>
        <TextInter style={styles.text}>{item?.region}</TextInter>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 195,
    width: 108,
  },
  picture: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.white,
    overflow: 'hidden',
  },
  innerContainer: {
    alignItems: 'center',
  },
  avaContainer: {
    width: 37,
    height: 37,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 5,
  },
  ava: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 13,
    color: theme.colors.storyTextGray,
  },
});
