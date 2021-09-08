import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: StyleGuide.spacing * 2,
  },
  title: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
    marginLeft: StyleGuide.spacing * 2,
  },
});
