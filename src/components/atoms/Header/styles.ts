import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';
import { HEADER_HEIGHT, STATUS_BAR_HEIGHT } from './constants';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
    justifyContent: 'center',
    paddingHorizontal: StyleGuide.spacing * 2,
    height: HEADER_HEIGHT + STATUS_BAR_HEIGHT,
    zIndex: 2,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: StyleGuide.spacing * 2,
  },
  title: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.primary,
  },
  rightButtons: { flexDirection: 'row', alignItems: 'center' },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagButton: {
    width: 33,
    height: 33,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: StyleGuide.palette.light,
  },
});
