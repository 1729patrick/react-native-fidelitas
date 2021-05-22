import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  container: { width: '100%', flexGrow: 1 },
  title: {
    ...StyleGuide.typography.title3,
    textAlign: 'center',
  },
  description: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
    textAlign: 'center',
    marginBottom: 12,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  button: {
    marginLeft: 'auto',
    width: 120,
    height: 37,
    borderRadius: 0,
    marginBottom: 20,
  },
});
