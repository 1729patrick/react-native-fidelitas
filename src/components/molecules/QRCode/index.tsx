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

  useEffect(() => {
    // "A:502607920*B:303023864*C:PT*D:FT*E:N*F:20210919*G:FT 0270392021090000035559*H:0*I1:PT*I3:18.79*I4:1.13*I7:7.66*I8:1.76*N:2.89*O:29.34*Q:ljs/*R:1140"
    console.log({ text });
  }, [text]);

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
