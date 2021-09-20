import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { AuthProvider } from './contexts/Auth';
import { BasketProvider } from './contexts/Basket';
import { RestaurantProvider } from './contexts/Restaurant';
import { useLanguage } from './hooks/useLanguage';
import Routes from './routes';
import { Alert, AlertType } from './util/Alert';
import StyleGuide from './util/StyleGuide';
import {
  initialWindowMetrics,
  Metrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const App = () => {
  const [height, setHeight] = useState(1);
  useLanguage();

  const initialMetrics = {
    ...initialWindowMetrics,
    frame: { ...initialWindowMetrics!.frame, height },
  } as Metrics;

  return (
    <SafeAreaProvider initialMetrics={initialMetrics}>
      <RestaurantProvider>
        <AuthProvider>
          <BasketProvider>
            <DropdownAlert
              ref={ref => Alert.setRef(ref as AlertType)}
              defaultContainer={{
                padding: 8,
                paddingTop: StatusBar.currentHeight,
              }}
              updateStatusBar={false}
              onClose={() => Alert.onClose(Alert.barStyle)}
              successColor={StyleGuide.palette.green}
              infoColor={StyleGuide.palette.blue}
              errorColor={StyleGuide.palette.red}
              closeInterval={2000}
              renderImage={() => null}
              titleStyle={styles.alertTitle}
            />
            <StatusBar
              translucent={true}
              backgroundColor="transparent"
              barStyle="dark-content"
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
              }}
              onLayout={e => setHeight(e.nativeEvent.layout.height)}
            />
            <Routes />
          </BasketProvider>
        </AuthProvider>
      </RestaurantProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  alertTitle: {
    ...StyleGuide.typography.headline,
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export default App;
