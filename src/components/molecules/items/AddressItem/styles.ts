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
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: { flex: 1 },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: StyleGuide.spacing,
  },
  title: {
    ...StyleGuide.typography.headline,
    marginBottom: StyleGuide.spacing * 0.5,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.subhead,
    fontSize: 13,
    color: StyleGuide.palette.primary,
    flex: 1,
  },
  icon: { width: 30 },
  checkbox: { marginLeft: 'auto' },
});
