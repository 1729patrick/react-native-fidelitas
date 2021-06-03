import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  buttonTitle: {
    color: StyleGuide.palette.primary,
    width: '100%',
    textAlign: 'center',
  },
  subtitle: {
    ...StyleGuide.typography.title3,
    marginBottom: StyleGuide.spacing * 3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: StyleGuide.spacing * 1.5,
  },
  itemTitle: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
});
