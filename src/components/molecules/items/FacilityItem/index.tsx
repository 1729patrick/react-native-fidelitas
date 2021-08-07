import React, { ReactElement } from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import StyleGuide from '~/util/StyleGuide';
import styles from './styles';

export type FacilityType = {
  title: string;
  icon: ReactElement;
};

type FacilityProps = {
  onPress?: (args: Partial<FacilityType>) => void;
} & FacilityType;

const FacilityItem: React.FC<FacilityProps> = ({ title, icon, onPress }) => {
  return (
    <RectButton
      style={styles.container}
      rippleColor={StyleGuide.palette.secondary}
      onPress={() => {
        onPress?.({ title, icon });
      }}>
      <Text style={styles.title}>{title}</Text>
      {icon}
    </RectButton>
  );
};

export default FacilityItem;
