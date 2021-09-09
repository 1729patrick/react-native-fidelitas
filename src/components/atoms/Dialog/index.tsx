import React, { forwardRef, useImperativeHandle, useState } from 'react';
import RNDialog from 'react-native-dialog';
import StyleGuide from '~/util/StyleGuide';

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
      contentStyle={{
        backgroundColor: StyleGuide.palette.background,
        borderRadius: StyleGuide.borderRadius * 2,
        elevation: 0,
      }}>
      <RNDialog.Title style={{ color: StyleGuide.palette.primary }}>
        {title}
      </RNDialog.Title>
      <RNDialog.Description style={{ color: StyleGuide.palette.secondary }}>
        {description}
      </RNDialog.Description>
      <RNDialog.Button
        label="Cancel"
        color={StyleGuide.palette.primary}
        onPress={hidden}
      />
      <RNDialog.Button
        label={confirmTitle}
        color={StyleGuide.palette.red}
        onPress={onConfirm}
      />
    </RNDialog.Container>
  );
};

export default forwardRef(Dialog);
