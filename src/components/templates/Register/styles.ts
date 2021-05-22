import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  logo: { marginBottom: 30, marginTop: 70 },
  step: { width, paddingHorizontal: 20 },
});
