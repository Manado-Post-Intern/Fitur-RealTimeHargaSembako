import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {
  IMGMPTextPrimary,
  IcBack,
  IcBlueCheckmark,
  IcPlus,
  theme,
} from '../../../../assets';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {sectionList} from '../../../../data';
import Switch from '../../../../components/atoms/Switch';
import Button from '../../../../components/atoms/Button';

const ChannelTagSelection = ({navigation}) => {
  const [channelView, setChannelView] = useState(-1);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [tagView, setTagView] = useState(-1);
  const [selectedTag, setSelectedTag] = useState([]);

  const handleTagSelection = value => {
    if (selectedTag.includes(value)) {
      const newTag = selectedTag.filter(item => item !== value);
      setSelectedTag(newTag);
    } else {
      setSelectedTag([...selectedTag, value]);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack />
        </TouchableOpacity>
        <Image
          source={IMGMPTextPrimary}
          style={{
            resizeMode: 'contain',
            width: 130,
          }}
        />
      </View>

      <View style={styles.body}>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              value={selectedChannel}
              editable={false}
              placeholder={'Pilih Channel'}
              placeholderTextColor={theme.colors.textInputPlaceholder}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setChannelView(0)}
              style={styles.plusIcon}>
              <Text style={{color: theme.colors.MPGrey2}}>Chose</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.inputContainer, {paddingVertical: 10}]}>
          <FlatList
            data={selectedTag}
            horizontal
            renderItem={({item, index}) => {
              return (
                <View style={styles.tagItemContainer}>
                  <Text style={{color: theme.colors.MPGrey2}}>{item}</Text>
                </View>
              );
            }}
          />

          <TouchableOpacity onPress={() => setTagView(0)} style={styles.icon}>
            <IcPlus />
          </TouchableOpacity>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Pasang Sebagai Highlight Ads</Text>
          <Switch defaultValue={false} onChange={value => console.log(value)} />
        </View>

        <Text style={styles.warningText}>
          Konten ini akan melalui proses redasi dan tidak dapat diubah selama
          proses tersebut
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          Penulis berita wajib{' '}
          <Text style={{fontFamily: theme.fonts.inter.bold}}>
            mengupload KTP
          </Text>
        </Text>

        <Button
          label={'Kirim Berita'}
          style={{borderRadius: 17}}
          activeOpacity={0.8}
        />
      </View>

      <ChannelView
        open={channelView}
        onChange={index => setChannelView(index)}
        onItemSelect={value => setSelectedChannel(value)}
        value={selectedChannel}
      />
      <TagView
        open={tagView}
        onChange={index => setTagView(index)}
        onItemSelect={handleTagSelection}
        value={selectedTag}
      />
    </View>
  );
};

const ChannelView = ({
  value,
  open,
  onChange = () => {},
  onItemSelect = () => {},
}) => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['80%'], []);
  return (
    <BottomSheet
      enablePanDownToClose
      index={open}
      ref={bottomSheetRef}
      backgroundStyle={{backgroundColor: theme.colors.MPWhite}}
      snapPoints={snapPoints}
      onChange={onChange}>
      <BottomSheetScrollView>
        {sectionList.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onItemSelect(item.name)}
              style={styles.itemContainer}
              key={index}>
              <Text style={styles.itemText}>{item.name}</Text>
              {value === item.name && <IcBlueCheckmark />}
            </TouchableOpacity>
          );
        })}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};
const TagView = ({
  value,
  open,
  onChange = () => {},
  onItemSelect = () => {},
}) => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['80%'], []);
  return (
    <BottomSheet
      enablePanDownToClose
      index={open}
      ref={bottomSheetRef}
      backgroundStyle={{backgroundColor: theme.colors.MPWhite}}
      snapPoints={snapPoints}
      onChange={onChange}>
      <BottomSheetScrollView>
        {sectionList.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => onItemSelect(item.name)}
              style={styles.itemContainer}
              key={index}>
              <Text style={styles.itemText}>{item.name}</Text>
              {value?.includes(item.name) && <IcBlueCheckmark />}
            </TouchableOpacity>
          );
        })}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default ChannelTagSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 15,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  body: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: theme.colors.white2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginRight: 10,
    color: theme.colors.black,
  },
  icon: {
    backgroundColor: theme.colors.MPWhite,
    borderRadius: 6,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  itemContainer: {
    marginHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.MPGrey2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    color: 'black',
    fontSize: 15,
    fontFamily: theme.fonts.inter.semiBold,
  },
  plusIcon: {
    backgroundColor: theme.colors.MPWhite,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 5,
  },
  tagItemContainer: {
    backgroundColor: theme.colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    marginRight: 10,
    fontSize: 15,
    fontFamily: theme.fonts.inter.medium,
    color: theme.colors.MPGrey2,
  },
  warningText: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.regular,
    color: '#E25151',
    backgroundColor: theme.colors.white2,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  bottomContainer: {
    paddingBottom: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.regular,
    color: theme.colors.grey1,
    paddingBottom: 10,
  },
});
