import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcApple, IcFacebook, IcGoogle, theme} from '../../../assets';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const SocialSignIn = ({type}) => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };
  switch (type) {
    case 'facebook':
      return (
        <Pressable style={[styles.container, styles.facebook]}>
          <View style={[styles.iconContainer, styles.iconFacebook]}>
            <IcFacebook />
          </View>
          <Text style={styles.label}>Facebook</Text>
        </Pressable>
      );
    case 'google':
      return (
        <Pressable
          onPress={handleGoogleSignIn}
          style={[styles.container, styles.google]}>
          <View style={[styles.iconContainer, styles.iconGoogle]}>
            <IcGoogle />
          </View>
          <Text style={styles.label}>Google</Text>
        </Pressable>
      );
    case 'apple':
      return (
        <Pressable style={[styles.container, styles.apple]}>
          <View style={[styles.iconContainer, styles.iconApple]}>
            <IcApple />
          </View>
          <Text style={styles.label}>Apple Id</Text>
        </Pressable>
      );
  }
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconContainer}>
        <IcFacebook />
      </View>
      <Text style={styles.label}>Facebook</Text>
    </Pressable>
  );
};

export default SocialSignIn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    flexDirection: 'row',
  },
  label: {
    color: theme.colors.white,
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    width: 36,
    height: 36,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebook: {
    backgroundColor: '#0073DC',
  },
  iconFacebook: {
    backgroundColor: '#0649AD',
  },
  google: {
    backgroundColor: '#E96C6C',
  },
  iconGoogle: {
    backgroundColor: '#DE3030',
  },
  apple: {
    backgroundColor: '#383737',
  },
  iconApple: {
    backgroundColor: '#000000',
  },
});
