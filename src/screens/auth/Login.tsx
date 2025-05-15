import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {ms} from 'react-native-size-matters';
import {images} from '../../utils/Images';
import {fontFamily} from '../../utils/Fonts';
import {colors} from '../../utils/Colors';
import {CustomInput} from '../../components';
import {Button, TextField} from 'react-native-ui-lib';
import {Dropdown} from 'react-native-element-dropdown';
import {isIos} from '../../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyles} from '../../utils/GlobalStyles';
import {DownArrow, ErrorIcon, ShowPassword} from '../../utils/Svgs';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

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
      setPasswordError('Field is required');
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
    navigate('Home');
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} />
      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : undefined}
        style={GlobalStyles.flex}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={GlobalStyles.flexGrow}>
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
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Vehicle ID"
                  searchPlaceholder="Search..."
                  value={vehicleId}
                  onChange={onChangeVehicleId}
                  renderRightIcon={() => <DownArrow />}
                />

                <Text className="text-text16 font-Heebo-Regular text-black100 pb-2 pt-6">
                  Route ID
                </Text>
                <TextField
                  placeholder="Route ID"
                  value={routeId}
                  onChangeText={onChangeRouteId}
                  placeholderTextColor={colors.gray80}
                  style={{height: ms(54)}}
                  className="text-text16 font-Heebo-Regular text-black90 px-6 border border-gray90 rounded-lg overflow-hidden"
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
                  containerStyle={{}}
                  rightSource={<ShowPassword />}
                />
                {isPasswordError && (
                  <View className="flex-row items-center pt-2">
                    <ErrorIcon />
                    <Text className="pl-2 text-red100 text-text14 font-Heebo-Regular">
                      {passwordError}
                    </Text>
                  </View>
                )}

                <Button
                  label={'Login'}
                  style={{height: ms(54)}}
                  borderRadius={8}
                  text65R
                  onPress={onPressLogin}
                  className="mt-20 bg-blue100 text-white"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <SafeAreaView edges={['bottom']} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    width: ms(80),
    height: ms(80),
  },
  dropdown: {
    height: ms(54),
    borderColor: colors.gray90,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: ms(20),
  },
  placeholderStyle: {
    fontSize: ms(16),
    color: colors.gray100,
    fontFamily: fontFamily.Heebo_400,
  },
  selectedTextStyle: {
    fontSize: ms(16),
    color: colors.black90,
    fontFamily: fontFamily.Heebo_400,
  },
  routeInputStyle: {
    height: ms(54),
  },
});
