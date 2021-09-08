import { Dimensions } from 'react-native';
import { HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import StyleGuide from '~/util/StyleGuide';

const { height } = Dimensions.get('window');

export const MODAL_SNAP_POINTS = [
  HEADER_HEIGHT + StyleGuide.spacing * 4,
  height * 0.3,
  height,
];

export const MODAL_PADDING_TOP = 300;
export const MODAL_TIMING_DURATION = 200;
