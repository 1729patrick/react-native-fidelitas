import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  title: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.primary,
    letterSpacing: 0.7,
  },
  description: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
  },
  button: {
    ...StyleGuide.typography.caption,
  },
  loader: { marginLeft: StyleGuide.spacing },
});
