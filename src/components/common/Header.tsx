import {
  Text,
  TouchableOpacity,
  View,
  TextStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../../utils/Svgs';
import FastImage from 'react-native-fast-image';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import {WINDOW_WIDTH} from '../../utils/Constant';

interface Props {
  showBack?: boolean;
  isLogo?: boolean;
  title?: string;
  leftSource?: React.ReactNode;
  rightSource?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<any>;
  onPressLeftSource?: () => void;
  onPressRightSource?: () => void;
}

const Header: React.FC<Props> = ({
  showBack,
  isLogo,
  title,
  titleStyle,
  leftSource,
  rightSource,
  containerStyle,
  onPressLeftSource,
  onPressRightSource,
}) => {
  const {goBack} = useNavigation();

  return (
    <View
      style={[styles.containerStyle, containerStyle]}
      className="h-[50px] flex-row items-center justify-between px-5 shadow-md">
      <View className="absolute left-2.5 h-full min-w-[40px] z-50 items-center justify-center">
        {showBack && (
          <TouchableOpacity
            onPress={goBack}
            className="w-full h-full items-center justify-center">
            <BackIcon />
          </TouchableOpacity>
        )}
        {leftSource && (
          <TouchableOpacity
            onPress={onPressLeftSource}
            className="w-full h-full items-center justify-center">
            {leftSource}
          </TouchableOpacity>
        )}
      </View>

      {title && (
        <Text
          className="flex-1 text-center text-text20 font-Heebo-Bold font-bold"
          style={titleStyle}>
          {title}
        </Text>
      )}

      {isLogo && (
        <View className="flex-1 items-center">
          <FastImage
            source={images.reactNativeImg}
            resizeMode="contain"
            className="w-[37.85px] h-[37.85px]"
            style={styles.logoStyle}
          />
        </View>
      )}

      <View className="absolute right-5 h-full min-w-[40px] z-50 items-center justify-center">
        {rightSource && (
          <TouchableOpacity
            onPress={onPressRightSource}
            className="w-full h-full items-center justify-center">
            {rightSource}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    shadowColor: colors.gray40,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  titleStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: WINDOW_WIDTH * 0.053,
    color: colors.black,
    fontWeight: '600',
  },
  logoStyle: {
    width: WINDOW_WIDTH * 0.1,
    height: WINDOW_WIDTH * 0.1,
  },
});
