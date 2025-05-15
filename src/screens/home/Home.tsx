import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../components';
import {MenuIcon, TripIcon, VicIcon} from '../../utils/Svgs';
import {Button} from 'react-native-ui-lib';
import {ms} from 'react-native-size-matters';

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} />

      <Header isLogo leftSource={<MenuIcon />} />

      <View className="px-5 pt-8">
        <View className=" bg-blue100 rounded-2xl overflow-hidden px-3 pt-4 pb-4">
          <Text className="text-text24 font-Heebo-SemiBold text-white">
            Hi, Mohamed Kanjou
          </Text>
          <Text className="text-text16 text-white pt-3 font-Heebo-Regular pb-6">
            We are ready to deliver
          </Text>

          <View className="flex-row items-center gap-3">
            <View className="flex-1 bg-white flex-row items-center justify-center h-[40px] rounded-xl gap-4">
              <VicIcon />
              <Text>VIC 380</Text>
            </View>
            <View className="flex-1 bg-white flex-row items-center justify-center h-[40px] rounded-xl gap-4">
              <TripIcon />
              <Text>Trip #137380</Text>
            </View>
          </View>
        </View>

        <Text className="pt-10 font-Heebo-Bold text-text20">
          Pre Trip Tasks
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
