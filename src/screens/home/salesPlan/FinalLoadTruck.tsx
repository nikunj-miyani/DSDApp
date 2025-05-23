import {
  Animated,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomButton, Header} from '../../../components';
import {colors} from '../../../utils/Colors';
import {TruckWithBoxs} from '../../../utils/Svgs';
import {fontFamily} from '../../../utils/Fonts';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';
import SignatureCanvas from 'react-native-signature-canvas';
import {WINDOW_WIDTH} from '../../../utils/Constant';

const MIN_TEMP = -50;
const MAX_TEMP = 10;
const ANGLE_RANGE = 225;

const FinalLoadTruck = () => {
  const ref = useRef();

  const [isOn, setIsOn] = useState(true);
  const animation = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  const [temperature, setTemperature] = useState(-30);
  const [signature, setSignature] = useState(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const percent = ((temperature - MIN_TEMP) / (MAX_TEMP - MIN_TEMP)) * 100;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setScrollEnabled(false);
    },
    onPanResponderMove: (evt, gestureState) => {
      const dx = gestureState.moveX - gestureState.x0;
      const dy = gestureState.moveY - gestureState.y0;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 180;

      let mappedTemp = Math.round(
        (angle / 360) * (MAX_TEMP - MIN_TEMP) + MIN_TEMP,
      );
      mappedTemp = Math.max(MIN_TEMP, Math.min(MAX_TEMP, mappedTemp));
      setTemperature(mappedTemp);
    },
    onPanResponderRelease: () => {
      setScrollEnabled(true);
    },
    onPanResponderTerminate: () => {
      setScrollEnabled(true);
    },
  });

  const toggleSwitch = () => {
    setIsOn(!isOn);
    Animated.timing(animation, {
      toValue: isOn ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-3, 20],
  });

  const backgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ccc', '#0560FD'],
  });

  const handleSignature = signature => setSignature(signature);
  const handleEmpty = () => console.log('Empty');
  const handleClear = () => console.log('Clear success!');
  const handleEnd = () => ref.current.readSignature();

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} className="bg-blue100" />

      <Header
        title="Load Truck"
        showBack
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerContainer}
      />

      <ScrollView
        className="flex-1"
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.blue80,
          }}
          className="bg-blue80 flex-row items-center justify-center py-6 space-x-11 gap-14">
          <View className="relative">
            <View className="absolute top-[-10px] left-[30px] w-[80px] h-[80px] rounded-full bg-white/10" />
            <TruckWithBoxs />
          </View>
          <View className="space-y-1">
            <Text className="text-base text-black-900 font-normal">
              Total Truck Load
            </Text>
            <Text className="text-2xl text-blue-900 font-bold">27 Cartons</Text>
            <Text className="text-base text-gray-400 font-normal">
              Load Start 10:00 AM
            </Text>
          </View>
        </View>

        <View className="flex-row items-center px-5 pt-6">
          <Text className="flex-1 text-lg text-black-900 font-normal">
            Set Temperature
          </Text>
          <TouchableOpacity onPress={toggleSwitch}>
            <Animated.View
              className="w-12 h-6 rounded-full justify-center p-[6px]"
              style={{backgroundColor}}>
              <Animated.View
                className="w-4 h-4 rounded-full bg-white"
                style={{transform: [{translateX}]}}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center px-5 pt-6 space-x-5 gap-5">
          <View className="flex-1 h-10 border border-gray-400 rounded justify-center items-center">
            <Text className="text-base text-black-900 font-normal">
              Fahrenheit (°F)
            </Text>
          </View>
          <View className="flex-1 h-10 border border-blue-600 rounded justify-center items-center">
            <Text className="text-base text-blue-600 font-normal">
              Celsius (°C)
            </Text>
          </View>
        </View>

        <View className="items-center pt-6">
          <AnimatedCircularProgress
            size={WINDOW_WIDTH * 0.66}
            width={WINDOW_WIDTH * 0.016}
            fill={percent}
            tintColor={colors.blue100}
            backgroundColor={colors.gray70}
            arcSweepAngle={ANGLE_RANGE}
            rotation={248}
            renderCap={({center}) => (
              <Circle
                cx={center.x}
                cy={center.y}
                r={WINDOW_WIDTH * 0.032}
                fill={colors.blue100}
              />
            )}
            lineCap="round">
            {() => (
              <View
                className="items-center justify-center bg-white w-[185px] h-[185px] rounded-full"
                style={styles.shadowStyle}>
                <Text className="text-[66px] text-black-900 font-bold">
                  {temperature}
                  <Text className="text-lg">ºC</Text>
                </Text>
              </View>
            )}
          </AnimatedCircularProgress>

          <View className="absolute bottom-10 w-[250px] flex-row justify-between px-2.5">
            {[MIN_TEMP, MAX_TEMP].map((temp, i) => (
              <View
                key={i}
                className="w-[34px] h-[34px] bg-white rounded-full items-center justify-center shadow-md">
                <Text className="text-sm font-bold text-black-900">{temp}</Text>
              </View>
            ))}
          </View>

          <View {...panResponder.panHandlers} style={StyleSheet.absoluteFill} />
        </View>

        <View className="flex-row items-center px-5 pt-6">
          <Text className="flex-1 text-lg font-bold text-black-900">
            Add Signature
          </Text>
          <Text className="text-sm text-blue-600 font-normal">Clear</Text>
        </View>

        <View className="px-5 pt-5 h-[142px]">
          <SignatureCanvas
            ref={ref}
            onBegin={() => setScrollEnabled(false)}
            onEnd={() => {
              handleEnd();
              setScrollEnabled(true);
            }}
            onOK={handleSignature}
            onEmpty={handleEmpty}
            onClear={handleClear}
            descriptionText="Sign here"
            clearText="Clear"
            confirmText="Save"
          />
        </View>

        <View className="px-5 pt-6 pb-4">
          <CustomButton title="Save" />
        </View>
      </ScrollView>

      <SafeAreaView edges={['bottom']} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'left',
    paddingLeft: WINDOW_WIDTH * 0.1066,
    color: colors.white,
  },
  headerContainer: {
    backgroundColor: '#0560FD',
  },
  shadowStyle: {
    shadowColor: colors.shadow10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});

export default FinalLoadTruck;
