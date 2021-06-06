import { StyleSheet } from 'react-native';
import StyleGuide from '../../util/StyleGuide';

export default StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  image: { width: 60, height: 60, borderRadius: StyleGuide.borderRadius * 2 },
  profileInfo: {
    paddingLeft: StyleGuide.spacing * 2,
  },
  userName: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.primary,
  },
  link: {
    ...StyleGuide.typography.link,
  },
  items: {},
  item: {
    padding: StyleGuide.spacing * 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
    paddingLeft: StyleGuide.spacing,
  },
});
