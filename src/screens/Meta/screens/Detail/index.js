import {
  Clipboard,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  IcCopyLink,
  IcGmaps,
  IMGHotelBestWestern,
  IMGRoundFacebook,
  IMGRoundInstagram,
  IMGRoundWhatsapp,
  theme,
} from '../../../../assets';
import {Gap, TextInter, TopBar} from '../../../../components';
import {WebView} from 'react-native-webview';

const Detail = ({route}) => {
  const {item} = route.params;
  return (
    <ScrollView style={styles.container}>
      <View>
        <TopBar type="meta" />
      </View>
      <View>
        <WebView
          style={styles.image}
          source={{uri: item?.link_360}}
          onTouchStart={e => {
            e.preventDefault();
          }}
        />
        <View style={styles.titleContainer}>
          <TextInter style={styles.title}>{item?.site_name}</TextInter>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.informationContainer}>
            <TextInter style={styles.description}>
              {item?.description}
            </TextInter>

            <Gap height={16} />

            <View style={styles.addressContainer}>
              <IcGmaps />
              <Gap width={16} />
              <TextInter style={styles.address}>{item?.address}</TextInter>
            </View>

            <Gap height={16} />

            <TextInter style={styles.subText}>
              Info lebih lanjut tentang lokasi ini
            </TextInter>

            <Gap height={16} />

            <View style={styles.socialMediaContainer}>
              <View style={styles.socialMediaSubContainer}>
                <Image style={styles.socialMedia} source={IMGRoundWhatsapp} />
                <TextInter style={styles.socialMediaText}>{item?.wa}</TextInter>
              </View>
              <View style={styles.socialMediaSubContainer}>
                <Image style={styles.socialMedia} source={IMGRoundFacebook} />
                <TextInter style={styles.socialMediaText}>{item?.fb}</TextInter>
              </View>
              <View style={styles.socialMediaSubContainer}>
                <Image style={styles.socialMedia} source={IMGRoundInstagram} />
                <TextInter style={styles.socialMediaText}>
                  {item?.instagram}
                </TextInter>
              </View>
            </View>

            <Gap height={16} />

            <TextInter style={styles.pageLink}>Page Link</TextInter>
            <Gap height={8} />

            <View style={styles.linkContainer}>
              <TextInter style={styles.link}>{item?.website}</TextInter>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  Clipboard.setString(item?.website);
                  ToastAndroid.show(
                    'Link copied to clipboard',
                    ToastAndroid.SHORT,
                  );
                }}>
                <IcCopyLink />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  image: {
    height: 637,
    width: '100%',
  },
  titleContainer: {
    paddingLeft: 22,
    paddingRight: 10,
    height: 48,
    position: 'absolute',
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    top: 7,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: theme.colors.MPGrey2,
    fontWeight: '700',
  },

  bodyContainer: {
    marginHorizontal: 24,
  },
  informationContainer: {
    top: -32,
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF80',
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: 8,
  },
  description: {
    fontSize: 14,
    color: theme.colors.dark1,
  },
  addressContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.MPBlue2,
    padding: 8,
  },
  address: {
    fontSize: 12,
    color: theme.colors.white,
    flex: 1,
  },

  subText: {
    color: theme.colors.grey1,
  },

  socialMediaContainer: {
    // flexDirection: 'row',
  },
  socialMedia: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 5,
  },

  pageLink: {
    fontSize: 14,
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.MPBlue2,
  },

  linkContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 16,
  },
  link: {
    flex: 1,
    fontFamily: theme.fonts.inter.semiBold,
    color: '#8F8F8F',
  },
  socialMediaText: {
    fontSize: 15,
    color: theme.colors.grey1,
    flex: 1,
  },
  socialMediaSubContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
  },
});
