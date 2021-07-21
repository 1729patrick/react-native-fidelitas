import { StyleSheet } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  contentContainer: {
    paddingTop: TOTAL_HEADER_HEIGHT + StyleGuide.spacing * 2,
  },
});
