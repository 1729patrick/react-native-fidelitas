import { StatusBar, StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';
import { HEADER_HEIGHT, SEARCH_HEIGHT } from './constants';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 70,
    height: SEARCH_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: HEADER_HEIGHT,
    backgroundColor: StyleGuide.palette.background,
    borderColor: StyleGuide.palette.border,
    borderBottomWidth: 1,
    zIndex: 3,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: StyleGuide.palette.backgroundSecondary,
    borderRadius: 200,
    height: 48,
    paddingHorizontal: 20,
    marginHorizontal: StyleGuide.spacing * 2,
    alignItems: 'center',
  },
  input: {
    ...StyleGuide.typography.caption,
    paddingLeft: 15,
    flex: 1,
    color: StyleGuide.palette.primary,
  },
  iconContainer: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
  },
});
