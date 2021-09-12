import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View } from 'react-native';
import RNDialog from 'react-native-dialog';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

export type DialogHandler = {
  show: () => void;
  hidden: () => void;
};

type DialogProps = {
  title: string;
  description: string;
  confirmTitle: string;
  onConfirm: () => void;
};

const Dialog: React.ForwardRefRenderFunction<DialogHandler, DialogProps> = (
  { title, description, confirmTitle, onConfirm },
  ref,
) => {
  const [visible, setVisible] = useState(false);

  const hidden = () => {
    setVisible(false);
  };

  const show = () => {
    setVisible(true);
  };

  useImperativeHandle(
    ref,
    () => ({
      show,
      hidden,
    }),
    [],
  );

  return (
    <RNDialog.Container
      visible={visible}
      onRequestClose={hidden}
      onBackdropPress={hidden}
      verticalButtons
      //@ts-ignore
      statusBarTranslucent
      contentStyle={{
        backgroundColor: StyleGuide.palette.background,
        borderRadius: StyleGuide.borderRadius * 2,
        elevation: 0,
      }}>
      <RNDialog.Title style={styles.title}>{title}</RNDialog.Title>
      <RNDialog.Description style={styles.description}>
        {description}
      </RNDialog.Description>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <RNDialog.Button
          label="Cancel"
          color={StyleGuide.palette.primary}
          style={styles.button}
          onPress={hidden}
        />
        <RNDialog.Button
          label={confirmTitle}
          color={StyleGuide.palette.red}
          style={styles.button}
          onPress={onConfirm}
        />
      </View>
    </RNDialog.Container>
  );
};

export default forwardRef(Dialog);
