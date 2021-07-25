import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: { flexDirection: 'row' },
  link: {
    ...StyleGuide.typography.link,
  },
});
