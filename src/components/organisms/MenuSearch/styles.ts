import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
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
