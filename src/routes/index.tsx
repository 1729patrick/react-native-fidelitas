import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';

import TabBar from '../components/organisms/TabBar';
import StyleGuide from '../util/StyleGuide';
import Facilities from '../screens/Facilities';
import Map from '../screens/Map';
import Achievements from '../screens/Achievements';
import Menu from '../screens/Menu';
import Reservation from '../screens/Reservation';
import Profile from '../screens/Profile';
import vertical from './animations/vertical';
import horizontal from './animations/horizontal';

const optionsVertical = {
  cardStyleInterpolator: vertical,
};

const optionsHorizontal = {
  cardStyleInterpolator: horizontal,
};

const getTabBarVisibility = ({ route, navigation }) => {
  return true;
};

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerMode: false }}>
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
    <MenuStack.Navigator screenOptions={{ headerMode: false }}>
      <MenuStack.Screen
        name="Main"
        component={Menu}
        options={optionsVertical}
      />
      <MenuStack.Screen
        name="Category"
        component={Menu}
        options={optionsHorizontal}
      />
    </MenuStack.Navigator>
  );
};

const AuthTabNavigator = createBottomTabNavigator();

const Auth = () => {
  return (
    <AuthTabNavigator.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={({ route }) => ({
        header: () => null,
        lazy: true,
      })}>
      <AuthTabNavigator.Screen
        name="Home"
        component={HomeNavigator}
        options={({ route, navigation }) => ({
          header: () => null,
          tabBarVisible: getTabBarVisibility({ route, navigation }),
        })}
      />
      <AuthTabNavigator.Screen name="Menu" component={MenuNavigator} />
      <AuthTabNavigator.Screen name="Reservation" component={Reservation} />
      <AuthTabNavigator.Screen name="Achievements" component={Achievements} />
      <AuthTabNavigator.Screen name="Profile" component={Profile} />
    </AuthTabNavigator.Navigator>
  );
};

const PublicStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer theme={StyleGuide.navigation}>
      <PublicStack.Navigator screenOptions={{ headerMode: false }}>
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
