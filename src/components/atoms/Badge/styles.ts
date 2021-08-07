import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.primary,
    minWidth: 18,
    minHeight: 18,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...StyleGuide.typography.headline,
    fontSize: 9,
    color: StyleGuide.palette.background,
    paddingHorizontal: 4,
  },
});
