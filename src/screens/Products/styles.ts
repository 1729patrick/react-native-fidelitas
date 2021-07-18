import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '../../util/StyleGuide';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: height * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: StyleGuide.palette.backgroundSecondary,
    borderRadius: 200,
    height: 48,
    paddingHorizontal: 20,
    marginHorizontal: StyleGuide.spacing * 3,
    alignItems: 'center',
  },
  title: {
    ...StyleGuide.typography.title1,
    fontSize: 27,
    textAlign: 'center',
    color: '#fff',
    marginTop: 80 + 48,
  },
  input: {
    ...StyleGuide.typography.caption,
    paddingLeft: 15,
    flex: 1,
    color: StyleGuide.palette.primary,
  },
  searchContainer: {
    ...StyleSheet.absoluteFillObject,
    top: 70,
    height: 48 + 20 + 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    zIndex: 2,
    backgroundColor: '#fff',
  },
});
