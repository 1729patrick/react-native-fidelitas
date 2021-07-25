import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 1.5,
    borderRadius: StyleGuide.borderRadius * 2,
    padding: StyleGuide.spacing * 1.75,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
    paddingLeft: StyleGuide.spacing * 2,
  },
  toggle: { marginLeft: 'auto' },
});
