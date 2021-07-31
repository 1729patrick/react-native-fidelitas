import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  container: { height: 50, marginTop: StyleGuide.spacing * 3 },
  input: {
    ...StyleGuide.typography.caption,
    height: 50,
    borderRadius: 4,
    paddingLeft: 19,
    color: StyleGuide.palette.primary,
  },
  placeholderContainer: {
    position: 'absolute',
    paddingHorizontal: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: -2,
  },
  placeholder: {
    ...StyleGuide.typography.caption,
    backgroundColor: StyleGuide.navigation.colors.background,
    color: StyleGuide.palette.primary,
    paddingHorizontal: 8,
  },
});
