import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  areas: { flexDirection: 'row' },
  area: {
    ...StyleGuide.typography.caption,
    marginRight: StyleGuide.spacing / 2,
  },
  opened: {
    color: StyleGuide.palette.green,
  },
  closed: {
    color: StyleGuide.palette.red,
  },
});
