import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  svg: {
    transform: [{ rotateZ: '270deg' }],
  },
  container: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percent: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.secondary,
    marginLeft: StyleGuide.spacing / 2,
  },
});
