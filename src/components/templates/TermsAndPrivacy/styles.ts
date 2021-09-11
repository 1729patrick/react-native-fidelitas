import { StyleSheet } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  contentContainer: {
    paddingHorizontal: StyleGuide.spacing * 2,
    paddingTop: TOTAL_HEADER_HEIGHT,
  },
  title: {
    ...StyleGuide.typography.title2,
    color: StyleGuide.palette.primary,
    marginTop: StyleGuide.spacing * 2,
  },
  description: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
    marginTop: StyleGuide.spacing * 2,
  },
  bold: { fontFamily: 'Montserrat-Bold' },
});
