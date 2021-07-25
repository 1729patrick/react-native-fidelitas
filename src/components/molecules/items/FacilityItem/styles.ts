import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: StyleGuide.spacing * 1.5,
    paddingVertical: StyleGuide.spacing * 1.5,
  },
  title: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
});
