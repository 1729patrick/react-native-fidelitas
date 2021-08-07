import { Dimensions, StyleSheet } from 'react-native';
import { BASKET_HEIGHT } from '~/screens/menu/Menu/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  basket: {
    position: 'absolute',
    height: BASKET_HEIGHT,
    right: StyleGuide.spacing * 2,
    left: StyleGuide.spacing * 2,
    zIndex: 1,
    // elevation: 5,
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
  badgeContainer: { marginLeft: -12, marginBottom: -20 },
});
