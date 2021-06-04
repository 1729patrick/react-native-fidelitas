import { StyleSheet } from 'react-native';
import StyleGuide from '../../util/StyleGuide';

export default StyleSheet.create({
  progressGlobal: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.secondary,
  },
});
