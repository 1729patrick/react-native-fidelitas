import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: StyleGuide.spacing * 2,
  },
  label: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
    paddingHorizontal: 8,
  },
});
