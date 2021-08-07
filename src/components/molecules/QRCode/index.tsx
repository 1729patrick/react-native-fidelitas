import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect } from 'react';
import {
  GoogleVisionBarcodesDetectedEvent,
  RNCamera,
} from 'react-native-camera';
import QRCodeMask from '~/components/atoms/QRCodeMask';
import useStatusBar from '~/hooks/useStatusBar';

import styles from './styles';
import { View } from 'react-native';
import Header from '~/components/atoms/Header';

const QRCode = () => {
  useStatusBar(false);
  const cameraRef = useRef<RNCamera>(null);

  const [text, setText] = useState('');
  const [loaded, setLoaded] = useState(false);
  const { addListener } = useNavigation<StackNavigationProp<any>>();

  const onQRCodeDetected = useCallback(
    ({ barcodes }: GoogleVisionBarcodesDetectedEvent) => {
      const [{ data } = { data: '' }] = barcodes || [{}];

      if (data && !text) {
        setText(data);
      }
    },
    [text],
  );

  useEffect(() => {
    addListener('transitionEnd', () => setLoaded(true));
    addListener('transitionStart', () => setLoaded(false));
  }, [addListener]);

  const renderCamera = useCallback(() => {
    if (!loaded) {
      return null;
    }

    return (
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}
        onGoogleVisionBarcodesDetected={onQRCodeDetected}
      />
    );
  }, [loaded, onQRCodeDetected]);

  return (
    <View style={styles.container}>
      <Header backgroundColor={'transparent'} color={'#fff'} close />
      {renderCamera()}
      <QRCodeMask />
    </View>
  );
};

export default QRCode;
