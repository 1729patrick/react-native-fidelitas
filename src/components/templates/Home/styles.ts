import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';
import { BOTTOM_TAB_BAR_HEIGHT } from '../../organisms/TabBar/Bottom/constants';

export default StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    width: '100%',
    height: 300,
  },
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1,
    height: 25,
    backgroundColor: StyleGuide.navigation.colors.background,
  },
  contentContainer: {
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT + StyleGuide.spacing * 3,
    paddingTop: 300,
  },
  title: {
    ...StyleGuide.typography.title1,
    color: StyleGuide.palette.primary,
    paddingTop: StyleGuide.spacing * 2,
    paddingBottom: StyleGuide.spacing,
  },
  container: {
    paddingHorizontal: StyleGuide.spacing * 3,
    backgroundColor: StyleGuide.navigation.colors.background,
  },
});
