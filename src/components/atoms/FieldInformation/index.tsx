import React from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import styles from './styles';

type FieldInformationProps = {
  title: string;
  description?: string;
  titleStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
};

const FieldInformation: React.FC<FieldInformationProps> = ({
  title,
  description,
  titleStyle,
  descriptionStyle,
  containerStyle,
}) => {
  if (!description) {
    return null;
  }

  return (
    <View style={containerStyle}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.description, descriptionStyle]}>{description}</Text>
    </View>
  );
};

export default FieldInformation;
