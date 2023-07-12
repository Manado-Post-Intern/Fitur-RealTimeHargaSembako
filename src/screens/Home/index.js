import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {theme} from '../../assets';
import {Gap} from '../../components';
import {
  ActionSection,
  Headlines,
  LatestNews,
  MPDigital,
  MPNewspaper,
  NewsForYou,
  Story,
} from './components';
import {screenHeightPercentage} from '../../utils';
import {Card as CardNews} from './components/NewsForYou/components';
import {TrendingSection} from '../Trending/components';
import CanalModal from './components/NewsForYou/components/CanalModal';
import axios from 'axios';
import {editorPick, headline, latest, loadSession, site} from '../../api';

const data = [0, 1, 2];

const Home = () => {
  const canalModalRef = useRef();
  const [token, setToken] = useState(null);
  const [headlines, setHeadlines] = useState(null);
  const [forYou, setForYou] = useState(null);

  const getHeadline = async () => {
    try {
      const response = await axios.get(headline, {
        headers: {
          Accept: 'application/vnd.promedia+json; version=1.0',
          Authorization: `Bearer ${token}`,
        },
      });
      setHeadlines(response.data.data.list);
    } catch (error) {
      console.log(error);
    }
  };
  const getForYou = async () => {
    try {
      const response = await axios.get(editorPick, {
        headers: {
          Accept: 'application/vnd.promedia+json; version=1.0',
          Authorization: `Bearer ${token}`,
        },
      });
      setForYou(response.data.data.list);
    } catch (error) {
      console.log(error);
    }
  };
  const getLatest = async () => {
    try {
      const response = await axios.get(latest, {
        headers: {
          Accept: 'application/vnd.promedia+json; version=1.0',
          Authorization: `Bearer ${token}`,
        },
        params: {
          section_id: 1,
        },
      });
      console.log(response.data.data.list);
    } catch (error) {
      console.log(error);
    }
  };
  // const getReferenceSite = async () => {
  //   try {
  //     const response = await axios.get(site, {
  //       headers: {
  //         Accept: 'application/vnd.promedia+json; version=1.0',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (token) {
      getHeadline();
      getForYou();
      // getLatest();
      // getReferenceSite();
    }
  }, [token]);

  useEffect(() => {
    loadSession()
      .then(session => {
        if (session) {
          setToken(session.access_token);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <ScrollView style={styles.bodyContainer}>
          <Gap height={36} />

          <Story />

          <Gap height={12} />

          <ActionSection />

          <Gap height={12} />

          <Headlines data={headlines} />

          <Gap height={12} />

          <NewsForYou canalModalRef={canalModalRef} item={forYou} />

          <Gap height={12} />

          <LatestNews />

          <Gap height={12} />

          <TrendingSection />

          <Gap height={12} />

          <MPDigital />

          <Gap height={12} />

          {data.map((item, i) => (
            <CardNews key={i} />
          ))}

          <Gap height={12} />

          <MPNewspaper />

          <Gap height={screenHeightPercentage('11%')} />
        </ScrollView>

        <CanalModal canalModalRef={canalModalRef} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  container: {
    zIndex: 0,
    flex: 1,
    backgroundColor: theme.colors.white2,
  },

  bodyContainer: {
    top: -20,
  },
});
