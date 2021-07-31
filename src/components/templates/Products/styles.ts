import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';
import { TOTAL_HEADER_HEIGHT } from '../../atoms/Header/constants';

export default StyleSheet.create({
  container: {
    paddingTop: TOTAL_HEADER_HEIGHT + StyleGuide.spacing * 2,
  },
  product: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: StyleGuide.borderRadius * 2,
    padding: StyleGuide.spacing * 1.5,
    alignItems: 'center',
  },
  border: {
    borderWidth: 0.5,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 2,
    marginHorizontal: StyleGuide.spacing * 2,
    borderRadius: StyleGuide.borderRadius * 2,
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
