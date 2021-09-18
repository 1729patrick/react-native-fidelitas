import { Dimensions } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';

const { height } = Dimensions.get('window');

const FOOTER_HEIGHT = 80;

export const CONTENT_HEIGHT = height - TOTAL_HEADER_HEIGHT - FOOTER_HEIGHT - 20;
