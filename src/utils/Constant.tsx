import {Dimensions, Platform} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const isIos = Platform.OS === 'ios';

export const bottomBarHeight = WINDOW_HEIGHT * 0.085;
