import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef } from 'react';
import { StatusBar } from 'react-native';
import FloatingButton, {
  FloatingButtonHandler,
} from '~/components/atoms/buttons/FloatingButton';
import Header from '~/components/atoms/Header';
import { ActiveQRCode } from '~/components/atoms/icons/QRCode';
import ReservationList from '~/components/organisms/lists/Reservation';
import Reservation from '~/components/templates/Reservation';
import useStatusBar from '~/hooks/useStatusBar';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const reservations = [
  {
    id: 'Almoço para 3 em 12 de Julho de 2021 às 12h:30m',
    type: 'Almoço',
    size: 3,
    date: '12 de Jul de 2021 às 12h:30m',
    deposit: 70,
    status: 'Confirmado',
  },
  {
    id: 'Jantar para 3 em 15 de Julho de 2021 às 18h:00m',
    type: 'Jantar',
    size: 3,
    date: '12 de Jul de 2021 às 12h:30m',
    deposit: 70,
    status: 'Confirmado',
  },
];

export default () => {
  const floatingButtonRef = useRef<FloatingButtonHandler>(null);
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  useStatusBar(true);

  const openQRCode = () => {
    navigate('QRCode');
  };

  return (
    <Reservation
      statusBar={
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="dark-content"
        />
      }
      header={<Header showBack={false} title="Reservas" elevation={1} />}
      list={
        <ReservationList
          data={reservations}
          style={styles.contentContainer}
          onPress={e => console.log(e)}
          onScrollUp={() => floatingButtonRef.current?.show()}
          onScrollDown={() => floatingButtonRef.current?.hide()}
        />
      }
      action={
        <FloatingButton
          ref={floatingButtonRef}
          onPress={openQRCode}
          icon={<Icon name="plus" color="#fff" size={30} />}
        />
      }
    />
  );
};
