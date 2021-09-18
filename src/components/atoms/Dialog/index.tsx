import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View } from 'react-native';
import RNDialog from 'react-native-dialog';
import StyleGuide from '~/util/StyleGuide';
import Loader from '../Loader';
import styles from './styles';

export type DialogHandler = {
  show: () => void;
  hidden: () => void;
  setLoading: (loading: boolean) => void;
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
  const [loading, setLoading] = useState(false);

  const hidden = () => {
    setVisible(false);
    setLoading(false);
  };

  const show = () => {
    setVisible(true);
  };

  useImperativeHandle(
    ref,
    () => ({
      show,
      hidden,
      setLoading,
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
        {!loading && (
          <RNDialog.Button
            label={confirmTitle}
            color={StyleGuide.palette.red}
            style={styles.button}
            onPress={onConfirm}
          />
        )}
        {loading && (
          <Loader
            style={styles.loader}
            color={StyleGuide.palette.red}
            size={'large'}
          />
        )}
      </View>
    </RNDialog.Container>
  );
};

export default forwardRef(Dialog);
