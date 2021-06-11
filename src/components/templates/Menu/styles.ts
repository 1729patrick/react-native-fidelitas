import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';
import { TOTAL_HEADER_HEIGHT } from '../../atoms/Header/constants';
import { BOTTOM_TAB_BAR_HEIGHT } from '../../organisms/TabBar/Bottom/constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    paddingTop: 327,
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT + StyleGuide.spacing,
    paddingHorizontal: StyleGuide.spacing * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    ...StyleGuide.typography.title2,
    color: StyleGuide.palette.primary,
    width: '100%',
    marginVertical: StyleGuide.spacing * 2,
  },
  category: {
    paddingBottom: StyleGuide.spacing * 2,
    width: (width - StyleGuide.spacing * 6) / 2,
  },
  image: {
    width: (width - StyleGuide.spacing * 6) / 2,
    height: (width - StyleGuide.spacing * 6) / 2,
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 6,
  },
  categoryTitle: {
    ...StyleGuide.typography.headline,
    fontSize: 13.5,
    marginTop: StyleGuide.spacing,
  },
  categoryDescriptions: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.secondary,
    // fontSize: 13.5,
  },

  product: {
    width: width - StyleGuide.spacing * 4,
    flexDirection: 'row',
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 2,
    padding: StyleGuide.spacing * 1.5,
    marginBottom: StyleGuide.spacing * 2,
    alignItems: 'center',
  },
  image1: {
    width: 75,
    height: 75,
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  productInfo: {
    paddingLeft: StyleGuide.spacing * 2,
    flex: 1,
  },
  productTitle: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.primary,
    fontSize: 13.5,
  },
  productDescription: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.secondary,
  },
  productPrice: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.green,
    marginTop: StyleGuide.spacing,
  },
});
