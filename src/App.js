import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import axios from 'axios';
import {auth, authConfig, authData} from './api';
import EncryptedStorage from 'react-native-encrypted-storage';

const App = () => {
  const storeSession = async detail => {
    try {
      await EncryptedStorage.setItem('detail', JSON.stringify(detail));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axios
      .post(auth, authData, authConfig)
      .then(response => {
        const session = response.data.data.detail;
        storeSession(session);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
});
