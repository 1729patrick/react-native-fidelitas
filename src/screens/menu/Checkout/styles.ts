import { Dimensions, StyleSheet } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingTop: TOTAL_HEADER_HEIGHT,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: StyleGuide.borderRadius * 2,
    padding: StyleGuide.spacing * 1.5,
    marginBottom: StyleGuide.spacing * 2,
    borderWidth: 1,
    borderColor: StyleGuide.palette.border,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...StyleGuide.typography.headline,
    marginBottom: StyleGuide.spacing * 0.5,
    color: StyleGuide.palette.primary,
  },
  action: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.app,
  },
  description: {
    ...StyleGuide.typography.subhead,
    fontSize: 13,
    color: StyleGuide.palette.primary,
  },
  addressLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: StyleGuide.spacing * 2,
  },
  basketLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: StyleGuide.spacing * 2,
    justifyContent: 'space-between',
  },
  icon: { width: 30 },
  items: { flexDirection: 'row' },
  itemsIcon: {
    marginLeft: StyleGuide.spacing,
  },
  basketTitle: {
    ...StyleGuide.typography.subhead,
    marginBottom: StyleGuide.spacing * 0.5,
    color: StyleGuide.palette.secondary,
  },
  basketDescription: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
  },
  basketTotal: {
    ...StyleGuide.typography.callout,
    fontSize: 14,
    color: StyleGuide.palette.primary,
  },
  cc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: StyleGuide.spacing * 3,
  },
  cardInfo: { flexDirection: 'row' },
  cardNumber: { alignItems: 'center', flexDirection: 'row' },
  cardIcon: {
    aspectRatio: 1.5,
    width: 40,
    marginRight: StyleGuide.spacing * 1.3,
  },
  dots: {
    flexDirection: 'row',
    marginRight: StyleGuide.spacing,
    alignItems: 'center',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 6,
    marginRight: StyleGuide.spacing * 0.5,
    backgroundColor: StyleGuide.palette.primary,
  },
  number: { ...StyleGuide.typography.subhead },

  complete: {
    position: 'absolute',
    top: height - 55,
    left: 0,
    right: 0,
    height: 55,
    backgroundColor: StyleGuide.palette.app,
  },
  completeTitle: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.background,
    fontSize: 15,
  },
  completeButton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
