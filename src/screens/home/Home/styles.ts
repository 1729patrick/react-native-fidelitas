import { StyleSheet } from 'react-native';
import { BOTTOM_TAB_BAR_HEIGHT } from '~/components/organisms/TabBar/Bottom/constants';
import StyleGuide from '~/util/StyleGuide';

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
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT,
    paddingTop: 300,
  },
  title: {
    ...StyleGuide.typography.title1,
    color: StyleGuide.palette.primary,
    paddingTop: StyleGuide.spacing * 2,
    paddingBottom: StyleGuide.spacing,
  },
  container: {
    paddingHorizontal: StyleGuide.spacing * 2,
    backgroundColor: StyleGuide.navigation.colors.background,
  },
});
