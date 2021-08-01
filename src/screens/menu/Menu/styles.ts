import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';
import { IMAGE_HEIGHT } from './constants';

export default StyleSheet.create({
  searchContainer: {
    ...StyleSheet.absoluteFillObject,
    top: 70,
    height: 48 + 20 + 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    zIndex: 2,
    backgroundColor: StyleGuide.palette.background,
    borderBottomWidth: 1,
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
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...StyleGuide.typography.title1,
    color: StyleGuide.palette.background,
    fontSize: 27,
    textAlign: 'center',
    marginTop: 80 + 48,
  },
  contentContainer: {
    paddingTop: 35 + StyleGuide.spacing * 4,
    paddingBottom: StyleGuide.spacing * 4,
  },
  searchContent: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: StyleGuide.palette.background,
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
