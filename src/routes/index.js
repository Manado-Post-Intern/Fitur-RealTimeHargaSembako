import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Article,
  ChooseCanal,
  ChooseRegion,
  Home,
  Highlight,
  Meta,
  MPDigitalAll,
  MPKoranAll,
  NewPassword,
  Onboarding,
  OTPVerification,
  Paper3D,
  ReadPaper,
  Region,
  RegionSearch,
  Search,
  SearchPaper,
  SideBar,
  SignIn,
  Splash,
  Trending,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBar} from './components';
import {screenHeightPercentage} from '../utils';
import {TopBar} from '../components';

const HomeTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return <BottomTabBar route={route} focused={focused} />;
        },
        header: () => {
          return <TopBar type="home" />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          overflow: 'hidden',
          height: screenHeightPercentage('10.5%'),
        },
      })}>
      <Tab.Screen name="Trending" component={Trending} />
      <Tab.Screen
        name="Region"
        component={Region}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Meta" component={Meta} options={{headerShown: false}} />
      <Tab.Screen
        name="Paper3D"
        component={Paper3D}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="ChooseCanal" component={ChooseCanal} />
      <Stack.Screen name="ChooseRegion" component={ChooseRegion} />
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="MPDigitalAll" component={MPDigitalAll} />
      <Stack.Screen name="SearchPaper" component={SearchPaper} />
      <Stack.Screen name="ReadPaper" component={ReadPaper} />
      <Stack.Screen name="MPKoranAll" component={MPKoranAll} />
      <Stack.Screen name="RegionSearch" component={RegionSearch} />
      <Stack.Screen name="Highlight" component={Highlight} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="SideBar" component={SideBar} />
    </Stack.Navigator>
  );
};

export default Routes;
