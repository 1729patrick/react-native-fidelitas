import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  border: {
    borderWidth: 0.5,
    borderColor: StyleGuide.palette.border,
    borderRadius: StyleGuide.borderRadius * 2,
    marginBottom: StyleGuide.spacing * 1.5,
  },
  container: {
    borderRadius: StyleGuide.borderRadius * 2,
    padding: StyleGuide.spacing * 1.75,
    backgroundColor: StyleGuide.palette.background,
  },
  title: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
  },
  date: {
    ...StyleGuide.typography.subhead,
    fontSize: 12,
    color: StyleGuide.palette.secondary,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
