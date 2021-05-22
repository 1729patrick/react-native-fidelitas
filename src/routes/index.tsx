import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Register from '../screens/Register';

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

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerMode: false }}>
        <Stack.Screen name="Welcome" component={Welcome} options={options} />
        <Stack.Screen name="Login" component={Login} options={options} />
        <Stack.Screen name="Register" component={Register} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
