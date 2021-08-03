import { StyleSheet } from 'react-native';
import { BOTTOM_TAB_BAR_HEIGHT } from '~/components/organisms/TabBar/Bottom/constants';
import StyleGuide from '~/util/StyleGuide';
import { BASKET_HEIGHT, IMAGE_HEIGHT } from './constants';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...StyleGuide.typography.title1,
    color: StyleGuide.palette.background,
    fontSize: 27,
    textAlign: 'center',
    marginTop: 80 + 48,
  },
  contentContainer: {
    paddingTop: 35 + StyleGuide.spacing * 4,
    paddingBottom: StyleGuide.spacing + BASKET_HEIGHT + StyleGuide.spacing * 4,
  },

  basket: {
    position: 'absolute',
    bottom: BOTTOM_TAB_BAR_HEIGHT + StyleGuide.spacing,
    backgroundColor: StyleGuide.palette.app,
    height: BASKET_HEIGHT,
    right: StyleGuide.spacing * 2,
    left: StyleGuide.spacing * 2,
    elevation: 5,
    borderRadius: StyleGuide.borderRadius,
  },
  basketTitleContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  basketIcon: { paddingLeft: StyleGuide.spacing * 2 },
  basketTitle: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.background,
    fontSize: 15,
  },
  basketButton: {
    height: '100%',
    width: '100%',
    borderRadius: StyleGuide.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
  },
  basketBadge: {
    backgroundColor: StyleGuide.palette.primary,
    minWidth: 18,
    minHeight: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -12,
    marginBottom: -20,
  },
  basketBadgeTitle: {
    ...StyleGuide.typography.headline,
    fontSize: 9,
    color: StyleGuide.palette.background,
  },
});
