import React from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
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
import Facilities from '../screens/Facilities';
import Map from '../screens/Map';

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

const getTabBarVisibility = ({ route, navigation }) => {
  return true;
};

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerMode: false }}>
      <HomeStack.Screen name="Main" component={Home} options={options} />
      <HomeStack.Screen
        name="Facilities"
        component={Facilities}
        options={options}
      />
      <HomeStack.Screen name="Map" component={Map} options={options} />
    </HomeStack.Navigator>
  );
};

const AuthTabNavigator = createBottomTabNavigator();

const Auth = () => {
  return (
    <AuthTabNavigator.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={({ route }) => ({
        header: () => null,
      })}>
      <AuthTabNavigator.Screen
        name="Home"
        component={HomeNavigator}
        options={({ route, navigation }) => ({
          header: () => null,
          tabBarVisible: getTabBarVisibility({ route, navigation }),
        })}
      />
      <AuthTabNavigator.Screen name="QRCode" component={Home} />
      <AuthTabNavigator.Screen name="Profile" component={Home} />
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
