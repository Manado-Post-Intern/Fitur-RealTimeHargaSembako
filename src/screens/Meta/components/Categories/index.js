import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {Gap, TextInter} from '../../../../components';
import {
  IcArrowRightSmall,
  IcMetaBudaya,
  IcMetaDive,
  IcMetaHotel,
  IcMetaOtomotif,
  IcMetaProperti,
  IcMetaRekreasi,
  IcMetaShoping,
  IcMetaTampilanUdara,
  IMGMetaBudaya,
  IMGMetaDive,
  IMGMetaHotel,
  IMGMetaOtomotif,
  IMGMetaProperti,
  IMGMetaRekreasi,
  IMGMetaShoping,
  IMGMetaTampilanUdara,
  theme,
} from '../../../../assets';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    title: 'Properti',
    image: IMGMetaProperti,
    icon: IcMetaProperti,
  },
  {
    title: 'Otomotif',
    image: IMGMetaOtomotif,
    icon: IcMetaOtomotif,
  },
  {
    title: 'Tampilan Udara',
    image: IMGMetaTampilanUdara,
    icon: IcMetaTampilanUdara,
  },
  {
    title: 'Rekreasi',
    image: IMGMetaRekreasi,
    icon: IcMetaRekreasi,
  },
  {
    title: 'Shoping Center',
    image: IMGMetaShoping,
    icon: IcMetaShoping,
  },
  {
    title: 'Hotel & Resort',
    image: IMGMetaHotel,
    icon: IcMetaHotel,
  },
  {
    title: 'Budaya',
    image: IMGMetaBudaya,
    icon: IcMetaBudaya,
  },
  {
    title: 'Olahraga & Dive',
    image: IMGMetaDive,
    icon: IcMetaDive,
  },
];

const STYLES = {
  borderRadius: 10,
};

const Categories = () => {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Pressable>
            <ImageBackground
              style={styles.image}
              imageStyle={styles.imageStyle}
              source={item.image}>
              <LinearGradient
                style={styles.innerContainer}
                colors={['#091E37', theme.colors.transparent]}>
                <View style={styles.innerTopContainer}>
                  <item.icon />
                  <TextInter style={styles.title}>{item.title}</TextInter>
                </View>
                <View style={styles.lihatButton}>
                  <TextInter style={styles.label}>Lihat</TextInter>
                  <Gap width={5} />
                  <IcArrowRightSmall />
                </View>
              </LinearGradient>
            </ImageBackground>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 23,
  },
  image: {
    width: 155,
    height: 144,
    marginHorizontal: 5,
  },
  imageStyle: {
    borderRadius: STYLES.borderRadius,
  },
  innerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 7,
    borderRadius: STYLES.borderRadius,
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.fontLight,
    fontSize: 15,
  },
  innerTopContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  lihatButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFFA3',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    width: '100%',
    marginBottom: 6,
  },
  label: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 12,
    color: theme.colors.MPBlue0,
  },
});
