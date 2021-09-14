import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: HEADER_HEIGHT,
  },
  nextButton: { marginRight: StyleGuide.spacing * 2.5 },
  stepContainer: { paddingHorizontal: StyleGuide.spacing * 2.5 },
  stepTitle: { textAlign: 'left', paddingLeft: StyleGuide.spacing * 2.5 },
});
