import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    paddingLeft: StyleGuide.spacing * 2,
  },
  userName: {
    ...StyleGuide.typography.title3,
    color: StyleGuide.palette.primary,
  },
  link: {
    ...StyleGuide.typography.link,
  },
});
