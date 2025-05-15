import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../../utils/Svgs';
import FastImage from 'react-native-fast-image';
import {images} from '../../utils/Images';

interface HeaderProps {
  showBack?: boolean;
  isLogo?: boolean;
  title?: string;
  leftSource?: React.ReactNode;
  rightSource?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
}

const Header: React.FC<HeaderProps> = ({
  showBack,
  isLogo,
  title,
  titleStyle,
  leftSource,
  rightSource,
}) => {
  const {goBack} = useNavigation();

  return (
    <View
      style={styles.container}
      className="flex-row items-center justify-between">
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <BackIcon />
          </TouchableOpacity>
        )}
        {leftSource && (
          <TouchableOpacity style={styles.leftSourceStyle}>
            {leftSource}
          </TouchableOpacity>
        )}
      </View>
      {title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
      {isLogo && (
        <View className="flex-1 items-center">
          <FastImage
            source={images.reactNativeImg}
            resizeMode="contain"
            style={styles.logoStyle}
          />
        </View>
      )}
      <View style={styles.rightContainer}>
        {rightSource && (
          <TouchableOpacity style={styles.rightSouceStyle}>
            {rightSource}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: ms(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: ms(20),
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
