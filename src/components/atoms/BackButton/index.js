import {Pressable} from 'react-native';
import React from 'react';
import {IcArrowLeft} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <IcArrowLeft />
    </Pressable>
  );
};

export default BackButton;
