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

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const options = {
  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  transitionSpec: {
    open: config,
    close: config,
  },
};
const theme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
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
    <NavigationContainer theme={theme}>
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
