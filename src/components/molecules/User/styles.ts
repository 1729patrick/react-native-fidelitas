import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    paddingLeft: StyleGuide.spacing * 2,
    flexDirection: 'column',
  },
  userName: {
    ...StyleGuide.typography.title3,
    color: StyleGuide.palette.primary,
  },
  button: { marginRight: 'auto' },
});
