import { Dimensions, StyleSheet } from 'react-native';
import { BOTTOM_TAB_BAR_HEIGHT } from '~/components/organisms/TabBar/constants';
import StyleGuide from '~/util/StyleGuide';

const { height } = Dimensions.get('window');

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
    height: height * 0.7,
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
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT + StyleGuide.spacing * 5,
  },
});
