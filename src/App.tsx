import React from 'react';
import { StatusBar } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { AuthProvider } from './contexts/Auth';
import { BasketProvider } from './contexts/Basket';
import Routes from './routes';
import { Alert, AlertType } from './util/Alert';
import StyleGuide from './util/StyleGuide';

const App = () => {
  return (
    <AuthProvider>
      <BasketProvider>
        <DropdownAlert
          ref={ref => Alert.setRef(ref as AlertType)}
          defaultContainer={{ padding: 8, paddingTop: StatusBar.currentHeight }}
          updateStatusBar={false}
          onClose={Alert.onClose}
          successColor={StyleGuide.palette.green}
          infoColor={StyleGuide.palette.blue}
          errorColor={StyleGuide.palette.red}
          renderImage={() => null}
          titleStyle={{
            ...StyleGuide.typography.headline,
            textAlign: 'left',
            color: 'white',
            backgroundColor: 'transparent',
          }}
        />
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
        <Routes />
      </BasketProvider>
    </AuthProvider>
  );
};

export default App;
