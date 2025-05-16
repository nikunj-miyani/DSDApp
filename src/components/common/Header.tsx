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
import {ms} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';

interface Props {
  showBack?: boolean;
  isLogo?: boolean;
  title?: string;
  leftSource?: React.ReactNode;
  rightSource?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<any>;
}

const Header: React.FC<Props> = ({
  showBack,
  isLogo,
  title,
  titleStyle,
  leftSource,
  rightSource,
  containerStyle,
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
          <TouchableOpacity className="w-full h-full items-center justify-center">
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
          <TouchableOpacity className="w-full h-full items-center justify-center">
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
  leftContainer: {
    position: 'absolute',
    minWidth: ms(40),
    height: '100%',
    left: ms(10),
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    position: 'absolute',
    minWidth: ms(40),
    height: '100%',
    right: ms(20),
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftSourceStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backStyle: {
    width: ms(20),
    height: ms(20),
  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(10),
  },
  titleStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: ms(20),
    color: colors.black,
    fontWeight: '600',
  },
  rightSouceStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: ms(37.85),
    height: ms(37.85),
  },
});
