import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: { flex: 1 },
  nextButton: { marginRight: StyleGuide.spacing * 2.5 },
  stepContainer: { paddingHorizontal: StyleGuide.spacing * 2.5 },
  stepTitle: {
    textAlign: 'left',
    paddingLeft: StyleGuide.spacing * 2.5,
    marginBottom: StyleGuide.spacing * 4,
  },
});
