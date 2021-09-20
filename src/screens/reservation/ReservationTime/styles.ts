import { StyleSheet } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: TOTAL_HEADER_HEIGHT,
  },
  nextButton: { marginRight: StyleGuide.spacing * 2.5 },
  content: {
    paddingHorizontal: StyleGuide.spacing * 2,
  },
});
