import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  subtitle: {
    ...StyleGuide.typography.title3,
    marginBottom: StyleGuide.spacing * 3,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: StyleGuide.spacing * 2.5,
  },
  title: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
  today: {
    ...StyleGuide.typography.caption,
    fontSize: 14,
    color: StyleGuide.palette.app,
  },
  description: {
    ...StyleGuide.typography.subhead,
    fontSize: 13.5,
    color: StyleGuide.palette.secondary,
  },
  hours: {
    alignItems: 'flex-end',
  },
});
