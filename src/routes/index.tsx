import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';

import TabBar from '../components/organisms/TabBar/Bottom';
import StyleGuide from '../util/StyleGuide';
import Facilities from '../screens/Facilities';
import Map from '../screens/Map';
import Achievements from '../screens/Achievements';
import Menu from '../screens/Menu';
import Reservation from '../screens/Reservation';
import Profile from '../screens/Profile';
import vertical from './animations/vertical';
import horizontal from './animations/horizontal';
import Products from '../screens/Products';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import Notifications from '~/screens/Notifications';
import TermsAndPrivacy from '~/screens/TermsAndPrivacy';
import Languages from '~/screens/Languages';
import QRCode from '~/screens/QRCode';
import PersonalInformation from '~/screens/PersonalInformation';

type TransitionSpecType = {
  open: TransitionSpec;
  close: TransitionSpec;
};

const transitionSpec: TransitionSpecType = {
  open: { animation: 'timing', config: { duration: 250 } },
  close: { animation: 'timing', config: { duration: 250 } },
};

const optionsVertical: StackNavigationOptions = {
  cardStyleInterpolator: vertical,
  transitionSpec,
};

const optionsHorizontal: StackNavigationOptions = {
  cardStyleInterpolator: horizontal,
  transitionSpec,
};

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name="Main"
        component={Home}
        options={optionsVertical}
      />
      <HomeStack.Screen
        name="Facilities"
        component={Facilities}
        options={optionsVertical}
      />
      <HomeStack.Screen name="Map" component={Map} options={optionsVertical} />
    </HomeStack.Navigator>
  );
};

const MenuStack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator screenOptions={{ headerShown: false }}>
      <MenuStack.Screen
        name="Main"
        component={Menu}
        options={optionsVertical}
      />
      <MenuStack.Screen
        name="Products"
        component={Products}
        options={optionsVertical}
      />
    </MenuStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen
        name="Main"
        component={Profile}
        options={optionsVertical}
      />
      <ProfileStack.Screen
        name="Notifications"
        component={Notifications}
        options={optionsVertical}
      />
      <ProfileStack.Screen
        name="TermsAndPrivacy"
        component={TermsAndPrivacy}
        options={optionsVertical}
      />
      <ProfileStack.Screen
        name="Languages"
        component={Languages}
        options={optionsVertical}
      />
      <ProfileStack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
        options={optionsVertical}
      />
    </ProfileStack.Navigator>
  );
};

const AchievementsStack = createStackNavigator();

const AchievementsNavigator = () => {
  return (
    <AchievementsStack.Navigator screenOptions={{ headerShown: false }}>
      <AchievementsStack.Screen
        name="Main"
        component={Achievements}
        options={optionsVertical}
      />
      <AchievementsStack.Screen
        name="QRCode"
        component={QRCode}
        options={optionsVertical}
      />
    </AchievementsStack.Navigator>
  );
};

const AuthTabNavigator = createBottomTabNavigator();

const Auth = () => {
  return (
    <AuthTabNavigator.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{ lazy: true, headerShown: false }}>
      <AuthTabNavigator.Screen name="Home" component={HomeNavigator} />
      <AuthTabNavigator.Screen name="Menu" component={MenuNavigator} />
      <AuthTabNavigator.Screen name="Reservation" component={Reservation} />
      <AuthTabNavigator.Screen
        name="Achievements"
        component={AchievementsNavigator}
      />
      <AuthTabNavigator.Screen name="Profile" component={ProfileNavigator} />
    </AuthTabNavigator.Navigator>
  );
};

const PublicStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer theme={StyleGuide.navigation}>
      <PublicStack.Navigator screenOptions={{ headerShown: false }}>
        <PublicStack.Screen
          name="Welcome"
          component={Welcome}
          options={optionsVertical}
        />
        <PublicStack.Screen
          name="Register"
          component={Register}
          options={optionsVertical}
        />

        <PublicStack.Screen
          name="Login"
          component={Login}
          options={optionsVertical}
        />
        <PublicStack.Screen
          name="Auth"
          component={Auth}
          options={optionsVertical}
        />
      </PublicStack.Navigator>
    </NavigationContainer>
  );
};
