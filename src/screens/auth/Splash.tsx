import {StyleSheet, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../utils/Images';

const Splash = () => {
  const {navigate} = useNavigation<any>();

  setTimeout(() => {
    navigate('Login');
  }, 1000);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <FastImage source={images.reactNativeImg} style={styles.imageStyle} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
  },
});
