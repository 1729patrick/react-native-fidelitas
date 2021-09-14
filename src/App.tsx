import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { AuthProvider } from './contexts/Auth';
import { BasketProvider } from './contexts/Basket';
import { RestaurantProvider } from './contexts/Restaurant';
import { useLanguage } from './hooks/useLanguage';
import Routes from './routes';
import { Alert, AlertType } from './util/Alert';
import StyleGuide from './util/StyleGuide';

const App = () => {
  useLanguage();

  return (
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
            translucent
            backgroundColor="rgba(0, 0, 0, 0)"
            barStyle="dark-content"
          />
          <Routes />
        </BasketProvider>
      </AuthProvider>
    </RestaurantProvider>
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
