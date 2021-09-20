import { StatusBar } from 'react-native';

export const HEADER_HEIGHT = StatusBar.currentHeight || 0;
export const SEARCH_HEIGHT = 48 + 20 + HEADER_HEIGHT;
