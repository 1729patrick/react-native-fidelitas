import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  subtitle: {
    ...StyleGuide.typography.title3,
    marginBottom: StyleGuide.spacing * 3,
    marginTop: StyleGuide.spacing * 6,
  },
  address: {
    ...StyleGuide.typography.caption,
    marginBottom: StyleGuide.spacing,
  },
});
