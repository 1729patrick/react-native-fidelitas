import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import vertical from './animations/vertical';
import horizontal from './animations/horizontal';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import Facilities from '~/screens/home/Facilities';
import Map from '~/screens/home/Map';
import Home from '~/screens/home/Home';
import Menu from '~/screens/menu/Menu';
import Products from '~/screens/menu/Products';
import Profile from '~/screens/profile/Profile';
import Notifications from '~/screens/profile/Notifications';
import TermsAndPrivacy from '~/screens/profile/TermsAndPrivacy';
import Languages from '~/screens/profile/Languages';
import PersonalInformation from '~/screens/profile/PersonalInformation';
import QRCode from '~/screens/achievements/QRCode';
import Reservation from '~/screens/reservation/Reservation';
import StyleGuide from '~/util/StyleGuide';
import Welcome from '~/screens/public/Welcome';
import Login from '~/screens/public/Login';
import Register from '~/screens/public/Register';
import Achievements from '~/screens/achievements/Achievements';
import TabBar from '~/components/organisms/TabBar/Bottom';
import Create from '~/screens/reservation/Create';

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

const ReservationStack = createStackNavigator();

const ReservationNavigator = () => {
  return (
    <ReservationStack.Navigator screenOptions={{ headerShown: false }}>
      <ReservationStack.Screen
        name="Main"
        component={Reservation}
        options={optionsVertical}
      />
      <ReservationStack.Screen
        name="Create"
        component={Create}
        options={optionsVertical}
      />
    </ReservationStack.Navigator>
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
      <AuthTabNavigator.Screen
        name="Reservation"
        component={ReservationNavigator}
      />
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
