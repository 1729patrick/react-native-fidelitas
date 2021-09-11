import { StyleSheet } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  contentContainer: {
    paddingTop: TOTAL_HEADER_HEIGHT,
    paddingHorizontal: StyleGuide.spacing * 2,
    paddingBottom: StyleGuide.spacing * 2,
    flexGrow: 1,
  },
  firstInput: {
    marginTop: StyleGuide.spacing * 2,
  },
  expirationAndSecureCode: {
    flexDirection: 'row',
    marginBottom: StyleGuide.spacing * 2,
  },
  expirationDate: {
    flex: 1,
    marginRight: StyleGuide.spacing,
  },
  secureCode: { flex: 1, marginLeft: StyleGuide.spacing },
  disclaimer: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
    marginTop: 'auto',
  },
});
