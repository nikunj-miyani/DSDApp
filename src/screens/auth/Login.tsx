import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {images} from '../../utils/Images';
import {colors} from '../../utils/Colors';
import {
  CustomInput,
  DropdownInput,
  KeyboardAvoidScrollView,
  TextField,
} from '../../components';
import {Button} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import {ErrorIcon, ShowPassword} from '../../utils/Svgs';
import {dropdownData} from '../../utils/ConstantData';
import {WINDOW_WIDTH} from '../../utils/Constant';

const Login = () => {
  const {navigate} = useNavigation<any>();

  const [vehicleId, setVehicleId] = useState('');
  const [routeId, setRouteId] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const onChangeVehicleId = (text: string) => {
    setVehicleId(text);
  };
  const onChangeRouteId = (text: string) => {
    setRouteId(text);
  };
  const onChangePassword = (text: string) => {
    if (text?.length === 0) {
      setIsPasswordError(true);
      setPasswordError('Password is required');
    } else {
      setIsPasswordError(false);
      setPasswordError('');
    }
    setPassword(text);
  };
  const onPressEyeIcon = () => {
    setIsSecure(!isSecure);
  };
  const onPressLogin = () => {
    navigate('Main');
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1" edges={['top', 'bottom']}>
        <KeyboardAvoidScrollView>
          <View className="flex-1 items-center py-12 px-6">
            <FastImage
              source={images.reactNativeImg}
              resizeMode="contain"
              style={styles.logoStyle}
            />

            <View className="w-full pt-10">
              <Text className="text-text24 text-black100 font-Heebo-Bold">
                Login
              </Text>

              <View className="pt-8">
                <Text className="text-text16 font-Heebo-Regular text-black100 pb-3">
                  Select Vehicle
                </Text>
                <DropdownInput
                  data={dropdownData}
                  value={vehicleId}
                  placeholder={'Select Vehicle ID'}
                  onChangeSelect={onChangeVehicleId}
                  dropdownStyle={{height: WINDOW_WIDTH * 0.135}}
                  placeholderStyle={{color: colors.gray100}}
                />

                <Text className="text-text16 font-Heebo-Regular text-black100 pb-2 pt-6">
                  Route ID
                </Text>
                <TextField
                  placeholder="Route ID"
                  value={routeId}
                  onChangeText={onChangeRouteId}
                />
                <Text className="text-text16 font-Heebo-Regular text-black100 pb-2 pt-6">
                  Password
                </Text>

                <CustomInput
                  value={password}
                  placeholder="Enter Password"
                  onChangeText={onChangePassword}
                  secureTextEntry={isSecure}
                  onPressRight={onPressEyeIcon}
                  rightSource={<ShowPassword />}
                />
                {isPasswordError && (
                  <View className="flex-row items-center pt-2">
                    <ErrorIcon />
                    <Text
                      style={{color: colors.red100}}
                      className="pl-2 text-text14 font-Heebo-Regular">
                      {passwordError}
                    </Text>
                  </View>
                )}

                <Button
                  label={'Login'}
                  style={{height: WINDOW_WIDTH * 0.135}}
                  borderRadius={8}
                  text65R
                  onPress={onPressLogin}
                  className="mt-20 bg-blue100 text-white"
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    width: WINDOW_WIDTH * 0.2,
    height: WINDOW_WIDTH * 0.2,
  },
});
