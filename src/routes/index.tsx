import React from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackCardInterpolationProps,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';

import TabBar from '../components/organisms/TabBar';
import StyleGuide from '../util/StyleGuide';
const { multiply } = Animated;

function forBottomSheetAndroid({
  current,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps) {
  const translateY = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.height, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: 'clamp',
  });

  return {
    cardStyle: {
      transform: [
        {
          translateY,
        },
      ],
    },
    overlayStyle: {
      opacity: overlayOpacity,
    },
  };
}

const options = {
  cardStyleInterpolator: forBottomSheetAndroid,
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
