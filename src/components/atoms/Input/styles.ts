import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  container: { height: 55, marginTop: 26 },
  input: {
    borderWidth: 1,
    height: 55,
    borderRadius: 4,
    paddingLeft: 19,
    color: StyleGuide.palette.primary,
  },
  placeholderContainer: {
    position: 'absolute',
    paddingHorizontal: 12,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    left: -2,
  },
  placeholder: {
    backgroundColor: 'rgb(242, 242, 242)',
    color: StyleGuide.palette.primary,
    paddingHorizontal: 8,
  },
});
