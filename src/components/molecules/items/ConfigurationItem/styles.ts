import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 2,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  button: {
    padding: StyleGuide.spacing * 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: StyleGuide.borderRadius * 2,
  },
  title: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
    paddingLeft: StyleGuide.spacing * 2,
  },
});
