import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: StyleGuide.palette.border,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
  withoutBorder: { borderRadius: 0, borderWidth: 0 },
});
