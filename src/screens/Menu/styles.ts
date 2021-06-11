import { StyleSheet } from 'react-native';
import StyleGuide from '../../util/StyleGuide';

export default StyleSheet.create({
  container: {},
  image: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    width: '100%',
    height: 300,
  },
  search: {
    ...StyleSheet.absoluteFillObject,
    top: 273,
    flexDirection: 'row',
    backgroundColor: StyleGuide.palette.background,
    borderRadius: 200,
    height: 54,
    elevation: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: StyleGuide.spacing * 2,
    height: 300,
  },
  title: {
    ...StyleGuide.typography.title1,
    fontSize: 27,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    ...StyleGuide.typography.caption,
    paddingLeft: 15,
    flex: 1,
    color: StyleGuide.palette.primary,
  },
});
