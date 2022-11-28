import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChooseCanal,
  ChooseRegion,
  Home,
  Meta,
  NewPassword,
  Onboarding,
  OTPVerification,
  Paper3D,
  Region,
  Search,
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
          return <TopBar />;
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
      <Tab.Screen name="Region" component={Region} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Meta" component={Meta} options={{headerShown: false}} />
      <Tab.Screen name="Paper3D" component={Paper3D} />
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
    </Stack.Navigator>
  );
};

export default Routes;
