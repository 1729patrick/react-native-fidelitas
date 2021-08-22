import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  border: {
    borderWidth: 0.5,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 1.5,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  container: {
    borderRadius: StyleGuide.borderRadius * 2,
    padding: StyleGuide.spacing * 1.75,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: StyleGuide.palette.background,
  },
  title: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
    paddingLeft: StyleGuide.spacing * 1.75,
  },
  toggle: { marginLeft: 'auto' },
});
