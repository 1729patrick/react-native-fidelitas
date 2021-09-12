import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
  logo: { width: '100%' },
  nextButton: { marginRight: StyleGuide.spacing * 2.5 },
  stepContainer: { paddingHorizontal: StyleGuide.spacing * 2.5 },
  stepTitle: { textAlign: 'left', paddingLeft: StyleGuide.spacing * 2.5 },
});