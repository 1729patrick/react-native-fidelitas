import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  title: {
    ...StyleGuide.typography.title2,
    color: StyleGuide.palette.primary,
    width: '100%',
    marginTop: StyleGuide.spacing * 4,
    marginBottom: StyleGuide.spacing * 2,
    paddingLeft: StyleGuide.spacing * 3,
  },
  contentContainer: {
    paddingHorizontal: StyleGuide.spacing * 2,
  },
});
