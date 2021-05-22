import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  container: { height: 50, marginTop: 22 },
  button: {
    height: '100%',
    backgroundColor: StyleGuide.palette.app,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  title: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.background,
  },
});
