import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginHorizontal: StyleGuide.spacing,
    width: (width - StyleGuide.spacing * 6) / 2,
  },
  image: {
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 1.5,
    width: (width - StyleGuide.spacing * 6) / 2,
    height: (width - StyleGuide.spacing * 6) / 2,
  },
  title: {
    ...StyleGuide.typography.headline,
    fontSize: 13,
    marginTop: StyleGuide.spacing,
  },
});
