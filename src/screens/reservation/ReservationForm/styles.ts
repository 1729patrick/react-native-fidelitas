import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    paddingTop: HEADER_HEIGHT + StyleGuide.spacing * 2,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
});
