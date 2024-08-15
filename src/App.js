/* eslint-disable prettier/prettier */

import {StyleSheet, Alert, Linking, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import axios from 'axios';
import {auth as promediaAuth, authConfig, authData} from './api';
import EncryptedStorage from 'react-native-encrypted-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthProvider} from './context/AuthContext';
import {AdsProvider} from './context/AdsContext';
import {MPDigitalProvider} from './context/MPDigitalContext';
import {TokenProvider} from './context/TokenContext';
import VersionCheck from 'react-native-version-check';

GoogleSignin.configure({
  webClientId:
    '782626479856-89khocqerprpe29tscrpvdn5vb8ghan0.apps.googleusercontent.com',
});

const App = () => {
  const latestVersion = "2.1.9"; // Define the latest version here
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.mp.manadopost&pcampaignid=web_share"; // Play Store URL

  const storeSession = async (detail) => {
    try {
      await EncryptedStorage.setItem('detail', JSON.stringify(detail));
    } catch (error) {
      console.log(error);
    }
  };

  const checkForSpecificVersion = async () => {
    try {
      const currentVersion = await VersionCheck.getCurrentVersion();

      if (currentVersion !== latestVersion) {
        Alert.alert(
          "Update Required",
          `You're using version ${currentVersion}. Please update to the latest version in the Play Store.`,
          [
            { 
              text: "Update Now", 
              onPress: () => {
                // Linking.openURL(playStoreUrl)
                //   .catch(err => console.error("Failed to open URL", err));
                BackHandler.exitApp(); // Close the app
              },
            },
          ],
          { cancelable: false } // Prevent the user from dismissing the alert without updating
        );
      }
    } catch (error) {
      console.log("Error checking version:", error);
    }
  };

  useEffect(() => {
    axios
      .post(promediaAuth, authData, authConfig)
      .then(response => {
        const session = response.data.data.detail;
        storeSession(session);
      })
      .catch(error => {
        console.log(error);
      });

    checkForSpecificVersion(); // Check if the current version matches the target version when the app starts
  }, []);

  return (
    <AuthProvider>
      <TokenProvider>
        <AdsProvider>
          <MPDigitalProvider>
            <GestureHandlerRootView style={styles.gestureHandlerRootView}>
              <BottomSheetModalProvider>
                <NavigationContainer>
                  <Routes />
                </NavigationContainer>
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </MPDigitalProvider>
        </AdsProvider>
      </TokenProvider>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
});
