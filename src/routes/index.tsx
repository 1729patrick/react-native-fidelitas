import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';

import TabBar from '../components/organisms/TabBar';
import StyleGuide from '../util/StyleGuide';

const config = {
  animation: 'spring',
  config: {
    stiffness: 600,
    damping: 300,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 1,
    restSpeedThreshold: 1,
  },
};

const options = {
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  // transitionSpec: {
  //   open: config,
  //   close: config,
  // },
};

const PublicStack = createStackNavigator();

const AuthTabNavigator = createBottomTabNavigator();

const Auth = () => {
  return (
    <AuthTabNavigator.Navigator
      screenOptions={{ header: () => null }}
      tabBar={props => <TabBar {...props} />}>
      <AuthTabNavigator.Screen name="Home" component={Home} />
      <AuthTabNavigator.Screen name="QRCode" component={Home} />
      <AuthTabNavigator.Screen name="Profile" component={Home} />
    </AuthTabNavigator.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer theme={StyleGuide.navigation}>
      <PublicStack.Navigator screenOptions={{ headerMode: false }}>
        <PublicStack.Screen
          name="Welcome"
          component={Welcome}
          options={options}
        />
        <PublicStack.Screen
          name="Register"
          component={Register}
          options={options}
        />

        <PublicStack.Screen name="Login" component={Login} options={options} />
        <PublicStack.Screen name="Auth" component={Auth} options={options} />
      </PublicStack.Navigator>
    </NavigationContainer>
  );
};
