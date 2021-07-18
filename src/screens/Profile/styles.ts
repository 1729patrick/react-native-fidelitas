import { StyleSheet } from 'react-native';
import StyleGuide from '../../util/StyleGuide';

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
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
  border: {
    borderWidth: 1,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 2,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  item: {
    padding: StyleGuide.spacing * 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: StyleGuide.borderRadius * 2,
  },
  itemTitle: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
    paddingLeft: StyleGuide.spacing * 2,
  },
});
