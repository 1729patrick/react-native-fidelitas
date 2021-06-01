import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  image: { width: '100%', height: 300 },
  title: {
    ...StyleGuide.typography.title1,
    marginTop: StyleGuide.spacing * 2,
  },
  container: {
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  areas: { flexDirection: 'row' },
  area: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
    marginTop: StyleGuide.spacing,
    marginRight: StyleGuide.spacing / 2,
  },
  line: {
    marginVertical: StyleGuide.spacing * 2,
    backgroundColor: StyleGuide.palette.border,
    height: 1,
  },
});
