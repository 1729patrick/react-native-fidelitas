import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {},
  content: { marginBottom: StyleGuide.spacing * 4 },
  incrementDecrement: { marginTop: StyleGuide.spacing * 4 },
  line: {
    flexDirection: 'row',
    marginBottom: StyleGuide.spacing * 2,
    justifyContent: 'space-between',
  },
  title: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
  },
});
