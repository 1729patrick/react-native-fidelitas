import { Dimensions } from 'react-native';
import {
  HEADER_HEIGHT,
  TOTAL_HEADER_HEIGHT,
} from '~/components/atoms/Header/constants';

const { height } = Dimensions.get('window');

const FOOTER_HEIGHT = 80;

export const CALENDAR_HEIGHT =
  height - TOTAL_HEADER_HEIGHT - FOOTER_HEIGHT - 20;
