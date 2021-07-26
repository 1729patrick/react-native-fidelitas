import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {},
  title: { ...StyleGuide.typography.title3, fontSize: 18 },
  slots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -StyleGuide.spacing * 0.5,
    marginTop: StyleGuide.spacing * 2,
  },
  button: {
    borderWidth: 2,
    borderColor: StyleGuide.palette.border,
    borderRadius: StyleGuide.borderRadius * 5,
    margin: StyleGuide.spacing * 0.5,
  },
  slot: {
    paddingVertical: StyleGuide.spacing * 0.5,
    paddingHorizontal: StyleGuide.spacing * 2,
    borderWidth: 2,
    borderColor: StyleGuide.palette.border,
    borderRadius: StyleGuide.borderRadius * 5,
  },
  hour: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
});
