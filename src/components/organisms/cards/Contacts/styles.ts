import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  subtitle: {
    ...StyleGuide.typography.title3,
    marginBottom: StyleGuide.spacing * 3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: StyleGuide.spacing * 2,
  },
  itemTitle: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
});
