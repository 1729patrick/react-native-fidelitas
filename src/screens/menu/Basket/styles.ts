import { Dimensions, StyleSheet } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    paddingTop: TOTAL_HEADER_HEIGHT + StyleGuide.spacing * 2,
    paddingBottom: StyleGuide.spacing * 2,
  },
  totalContainer: {
    paddingTop: StyleGuide.spacing * 1.5,
    marginTop: StyleGuide.spacing,
    marginHorizontal: StyleGuide.spacing * 2,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: StyleGuide.spacing * 0.5,
  },
  subtotal: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
  },
  total: {
    ...StyleGuide.typography.callout,
  },
  checkout: {
    position: 'absolute',
    top: height - 55,
    left: 0,
    right: 0,
    height: 55,
    backgroundColor: StyleGuide.palette.app,
  },
  checkoutTitle: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.background,
    fontSize: 15,
  },
  checkoutButton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
