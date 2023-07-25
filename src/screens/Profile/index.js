import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {IcChevronLeft, IcEdit, IMGDummyProfile, theme} from '../../assets';
import {screenHeightPercentage} from '../../utils';
import {Button, ChevroletBackButton, Gap, TextInter} from '../../components';
import {Password, TextInput} from './components';
import {AuthContext} from '../../context/AuthContext';

const Profile = () => {
  const [name, setName] = useState('Cameroon Williamson');
  const [phone, setPhone] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const {user} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ChevroletBackButton />
        <TextInter style={styles.headerLabel}>Edit Profile</TextInter>
        <View style={styles.none}>
          <IcChevronLeft />
        </View>
      </View>

      <Gap height={33} />

      <View style={styles.profilePictureSection}>
        <Image style={styles.image} source={{uri: user?.photoURL}} />
        <Pressable style={styles.editButton}>
          <IcEdit />
        </Pressable>
      </View>

      <View style={styles.inputSection}>
        <TextInput label="Nama" value={user?.displayName} setValue={setName} />
        <TextInput label="Email" value={user?.email} />
        <TextInput
          editable={false}
          label="Nomor HP"
          value={user?.phoneNumber}
          setValue={setPhone}
        />
        {/* <Password
          oldPassword={oldPassword}
          setOldPassword={setOldPassword}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
        /> */}
      </View>
      <View style={styles.saveButtonContainer}>
        <Button label="Simpan" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 38,
    paddingTop: screenHeightPercentage('5%'),
    flex: 1,
  },
  none: {
    opacity: 0,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLabel: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: theme.colors.MPGrey2,
    fontWeight: '700',
  },

  profilePictureSection: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  editButton: {
    width: 26,
    height: 26,
    backgroundColor: theme.colors.MPGrey2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    top: -14,
  },

  inputSection: {
    flex: 1,
  },
  saveButtonContainer: {
    bottom: screenHeightPercentage('5%'),
  },
});
