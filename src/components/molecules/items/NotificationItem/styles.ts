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
  info: { paddingLeft: StyleGuide.spacing * 1.75, flex: 1 },
  title: {
    ...StyleGuide.typography.headline,
    fontSize: 13.5,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.subhead,
    fontSize: 13.5,
    color: StyleGuide.palette.secondary,
  },
  date: { fontSize: 12, marginTop: StyleGuide.spacing },
});
