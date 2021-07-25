import React, { useCallback, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import {
  GoogleVisionBarcodesDetectedEvent,
  RNCamera,
} from 'react-native-camera';
import useStatusBar from '~/hooks/useStatusBar';

import styles from './styles';

const QRCode = () => {
  useStatusBar(false);
  const cameraRef = useRef<RNCamera>(null);

  const [text, setText] = useState('');

  const onQRCodeDetected = useCallback(
    ({ barcodes }: GoogleVisionBarcodesDetectedEvent) => {
      const [{ data } = { data: '' }] = barcodes || [{}];

      if (data && !text) {
        setText(data);
      }
    },
    [text],
  );

  return (
    <View style={styles.container}>
      <View style={styles.camera}>
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

        <View style={styles.left} />
        <View style={styles.right} />
        <View style={styles.bottom} />
        <View style={styles.top} />
        <View style={styles.border} />
      </View>
      <Text>{text}</Text>
    </View>
  );
};

export default QRCode;
