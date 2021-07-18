import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    ...StyleGuide.typography.title2,
    color: StyleGuide.palette.primary,
    width: '100%',
    marginTop: StyleGuide.spacing * 4,
    marginBottom: StyleGuide.spacing * 2,
    paddingLeft: StyleGuide.spacing * 3,
  },
  categories: {
    flexDirection: 'row',
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  contentContainer: {
    flexGrow: 1,
  },
  category: {
    marginHorizontal: StyleGuide.spacing,
    width: (width - StyleGuide.spacing * 6) / 2,
  },
  categoryImage: {
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 3,
    width: (width - StyleGuide.spacing * 6) / 2,
    height: (width - StyleGuide.spacing * 6) / 2,
  },
  categoryTitle: {
    ...StyleGuide.typography.headline,
    fontSize: 13.5,
    marginTop: StyleGuide.spacing,
  },
});
