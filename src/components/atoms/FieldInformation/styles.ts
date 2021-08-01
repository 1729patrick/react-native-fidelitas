import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  title: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
  },
  description: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
});
