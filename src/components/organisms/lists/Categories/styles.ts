import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: StyleGuide.spacing * 4,
    marginBottom: StyleGuide.spacing * 2,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  title: {
    ...StyleGuide.typography.title2,
    color: StyleGuide.palette.primary,
    marginBottom: StyleGuide.spacing * 0.5,
  },
  contentContainer: {
    paddingHorizontal: StyleGuide.spacing,
  },
});
