import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { StatusBar, Text } from 'react-native';
import useAchievements, { AchievementType } from '~/api/useAchievements';
import FloatingButton, {
  FloatingButtonHandler,
} from '~/components/atoms/buttons/FloatingButton';
import Header from '~/components/atoms/Header';
import { ActiveQRCode } from '~/components/atoms/icons/QRCode';
import AchievementList from '~/components/organisms/lists/Archievements';
import Achievements from '~/components/templates/Achievements';
import useStatusBar from '~/hooks/useStatusBar';
import Modal, { ModalHandler } from '~/components/molecules/modals/FlatList';

import styles from './styles';
import ModalList from '~/components/organisms/lists/Modal';
import Dialog, { DialogHandler } from '~/components/atoms/Dialog';

export default () => {
  const modalRef = useRef<ModalHandler>(null);
  const dialogRef = useRef<DialogHandler>(null);

  const { achievements } = useAchievements();
  const floatingButtonRef = useRef<FloatingButtonHandler>(null);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  useStatusBar(true);

  const openQRCode = () => {
    navigate('QRCode');
  };

  const onModalPress = () => {
    modalRef.current?.hidden();
    navigate('Reward');
  };

  const openShareApp = () => {
    navigate('ShareApp');
  };

  const onAchievementPress = (achievement: AchievementType) => {
    if (achievement.type === 'shareApp') {
      openShareApp();
      return;
    }

    modalRef.current?.show();
    // dialogRef.current?.show();
  };

  return (
    <Achievements
      statusBar={
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
      }
      header={
        <Header
          showBack={false}
          title="Conquistas"
          RightContent={
            <Text style={styles.progressGlobal}>0/{achievements.length}</Text>
          }
        />
      }
      list={
        <AchievementList
          data={achievements}
          style={styles.contentContainer}
          onPress={onAchievementPress}
          onScrollUp={() => floatingButtonRef.current?.show()}
          onScrollDown={() => floatingButtonRef.current?.hide()}
        />
      }
      action={
        <FloatingButton
          ref={floatingButtonRef}
          onPress={openQRCode}
          icon={<ActiveQRCode />}
        />
      }
      bottomSheet={
        <Modal ref={modalRef} itemHeight={72} itemsSize={1}>
          <ModalList data={[{ type: 'getReward' }]} onPress={onModalPress} />
        </Modal>
      }
      dialog={
        <Dialog
          ref={dialogRef}
          title="Address delete"
          description="Do you want to delete this address? You cannot undo this action."
          confirmTitle="Delete"
          onConfirm={() => {}}
        />
      }
    />
  );
};
