import { StyleSheet } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  contentContainer: {
    paddingTop: TOTAL_HEADER_HEIGHT,
    paddingHorizontal: StyleGuide.spacing * 2,
    paddingBottom: StyleGuide.spacing * 2,
  },
  title: {
    ...StyleGuide.typography.callout,
    marginTop: StyleGuide.spacing * 2,
    fontSize: 17,
  },
  firstInput: { marginTop: StyleGuide.spacing * 2 },
  checkbox: {
    marginTop: StyleGuide.spacing * 2,
  },
});
