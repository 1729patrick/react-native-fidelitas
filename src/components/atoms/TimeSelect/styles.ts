import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  title: { ...StyleGuide.typography.title3, fontSize: 18 },
  slots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: StyleGuide.spacing * 2,
    marginHorizontal: -StyleGuide.spacing * 0.5,
  },
  button: {
    borderWidth: 2,
    borderColor: StyleGuide.palette.border,
    borderRadius: StyleGuide.borderRadius * 5,
    margin: StyleGuide.spacing * 0.5,
  },
  slot: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: StyleGuide.spacing * 0.5,
    borderWidth: 2,
    borderColor: StyleGuide.palette.border,
    borderRadius: StyleGuide.borderRadius * 5,
    width: (width - StyleGuide.spacing * 4.5 - StyleGuide.spacing * 4) / 3,
  },
  checkedSlot: {
    backgroundColor: StyleGuide.palette.app,
    borderColor: StyleGuide.palette.app,
  },
  hour: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
  checkedHour: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.background,
    fontSize: 14,
  },
});
