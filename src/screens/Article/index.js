import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  IMGDummyHighlight,
  IMGDummyNews,
  IMGGodStatue,
  IMGLogoMinahasa,
  IMGMPTextPrimary,
  IMGYourAds,
  theme,
} from '../../assets';
import {
  Actions,
  BackButton,
  CategoryHorizontal,
  Gap,
  More,
  TextInter,
  TimeStamp,
} from '../../components';
import {screenHeightPercentage, screenWidth} from '../../utils';
import {Card} from '../Home/components/NewsForYou/components';
import {Card as TrendingCard} from '../Trending/components';

const related = [0, 1, 2];
const trending = [0, 1, 2, 3, 4];

const Article = () => {
  console.log(screenWidth());
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <Image style={styles.image} source={IMGGodStatue} />
      <View style={styles.innerContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.articleContainer}>
            <Image style={styles.mp} source={IMGMPTextPrimary} />
            <TextInter>Tukang Bangunan Ditatar Iptek Campuran Beton</TextInter>
            <Gap height={7} />
            <TimeStamp />
            <Gap height={7} />
            <View style={styles.authorContainer}>
              <View style={styles.authorImageContainer}>
                <Image style={styles.authorImage} source={IMGLogoMinahasa} />
              </View>
              <Gap width={4} />
              <TextInter style={styles.authorName}>Kenjiro Tanos</TextInter>
            </View>
            <View style={styles.articleTextContainer}>
              <TextInter style={styles.articleText}>
                MANADOPOST.ID—Tak hanya melakukan pengabdian kepada masyarakat,
                Politeknik Negeri Manado turut berbagi ilmu di Jemaat GMIM
                Paulus Kauditan di Desa Kauditan II, Kecamatan Kauditan.{'\n'}
                {'\n'}Program Penerapan Iptek kepada Masyarakat (PIM) dilakukan
                melalui pelatihan teknologi campuran beton untuk peningkatan
                keterampilan tukang bangunan, 29 September lalu. {'\n'}
                {'\n'}Syanne Pangemanan ST MEng selaku Ketua Tim Pelaksana
                didampingi anggota Helen G Mantiri SST MT dan Fery Sondakh ST MT
                mengatakan kegiatan menyasar para tukang bangunan di jemaat
                tersebut. {'\n'}
                {'\n'}Para akademisi Politeknik Manado membagikan ilmu
                pengetahuan dan teknologi serta pembuatan gudang penyimpanan
                barang milik GMIM Paulus Kauditan. {'\n'}
                {'\n'}“Implementasi teknologi desain campuran beton dan
                peningkatan pengetahuan melalui pemilihan dan penggunaan
                material campuran beton menjadi tujuan kegiatan tersebut,”
                tandasnya.
              </TextInter>
              <Gap height={10} />
              <TextInter style={styles.tagTerkait}>Tag Terkait</TextInter>
              <Gap height={10} />
              <CategoryHorizontal />
            </View>
          </View>

          <Gap height={16} />

          <Image style={styles.ads} source={IMGYourAds} />

          <View style={styles.sectionTitleContainer}>
            <TextInter style={styles.sectionTitle}>Related News</TextInter>
          </View>
          {related.map((item, i) => (
            <Card key={i} />
          ))}

          <View style={styles.sectionTitleContainer}>
            <TextInter style={styles.sectionTitle}>Trending</TextInter>
          </View>
          {trending.map((item, i) => (
            <TrendingCard key={i} />
          ))}
          <More />
          <Gap height={400} />
        </ScrollView>
      </View>
      <View style={styles.actionContainer}>
        <Actions border={false} type="big" />
      </View>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButtonContainer: {
    position: 'absolute',
    top: screenHeightPercentage('5%'),
    left: 25,
    zIndex: 50,
  },
  image: {
    width: '100%',
    height: 300,
  },
  innerContainer: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -26,
    overflow: 'hidden',
    zIndex: 10,
  },
  scrollView: {
    backgroundColor: theme.colors.MPWhite2,
  },
  articleContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 16,
    borderRadius: 24,
    backgroundColor: theme.colors.white,
  },
  mp: {
    width: 139,
    resizeMode: 'contain',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImageContainer: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
  },
  authorImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  authorName: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 14,
    color: theme.colors.MPBlue0,
  },

  articleTextContainer: {
    padding: 10,
  },
  articleText: {
    fontSize: 16,
    color: '#232324',
    lineHeight: 24,
  },
  tagTerkait: {
    fontSize: 14,
    color: theme.colors.MPBlue1,
  },

  ads: {
    width: screenWidth(),
    resizeMode: 'contain',
    height: 100,
  },

  sectionTitleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginLeft: 24,
  },
  sectionTitle: {
    fontFamily: theme.fonts.inter.bold,
    fontSize: 24,
    color: theme.colors.MPGrey2,
  },

  actionContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: theme.colors.white,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.07)',
    zIndex: 20,
  },
});
