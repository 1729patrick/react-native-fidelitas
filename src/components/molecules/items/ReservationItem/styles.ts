import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 1.5,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: StyleGuide.spacing * 2,
    paddingVertical: StyleGuide.spacing * 2,
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  progress: {
    paddingLeft: StyleGuide.spacing,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: StyleGuide.spacing * 0.15,
  },
  title: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.light,
  },
  status: {
    color: StyleGuide.palette.green,
  },
  icon: { marginRight: StyleGuide.spacing },
  size: {
    borderWidth: 2,
    borderColor: StyleGuide.palette.border,
    paddingVertical: StyleGuide.spacing * 0.25,
    paddingHorizontal: StyleGuide.spacing,
    borderRadius: StyleGuide.borderRadius * 4,
  },
});
