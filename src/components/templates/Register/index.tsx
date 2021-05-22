import React, { ReactNode } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');

type RegisterProps = {
  logo: ReactNode;
  steps: ReactNode[];
};

const Register: React.FC<RegisterProps> = ({ logo, steps }) => {
  return (
    <>
      <ScrollView
        horizontal
        overScrollMode="never"
        keyboardShouldPersistTaps="handled"
        snapToInterval={width}
        disableIntervalMomentum
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        scrollEnabled={false}>
        {steps.map((step, index) => (
          <View key={index} style={styles.step}>
            <ScrollView
              overScrollMode="never"
              contentContainerStyle={styles.contentContainer}>
              <View style={styles.logo}>{logo}</View>
              {step}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Register;
