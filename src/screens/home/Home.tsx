import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '../../components';
import {MenuIcon, TripIcon, VicIcon} from '../../utils/Svgs';
import {homeData} from '../../utils/ConstantData';
import {bottomBarHeight, WINDOW_WIDTH} from '../../utils/Constant';

const Home = () => {
  const {bottom} = useSafeAreaInsets();

  const renderTripItems = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={item?.onPress}
        className={`flex-1 max-w-[50%] items-center justify-center h-[127px] rounded-lg border ${
          index % 2 === 0 ? 'mr-[9px]' : 'ml-[9px]'
        } border-gray60`}>
        {item?.img}
        <Text className="pt-4 font-Heebo-Regular text-text16 font-normal">
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const listHeaderComponent = <View className="pt-4" />;
  const listFooterComponent = (
    <View style={{height: bottomBarHeight + bottom + WINDOW_WIDTH * 0.135}} />
  );
  const itemSeparatorComponent = () => <View className="h-[18px]" />;

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} />
      <Header isLogo leftSource={<MenuIcon />} />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="px-5 pt-6">
          <View className="bg-blue100 rounded-2xl overflow-hidden px-3 pt-4 pb-4">
            <Text className="text-text24 font-heebo-semibold text-white font-semibold">
              Hi, Mohamed Kanjou
            </Text>
            <Text className="text-text16 text-white pt-2 font-heebo-regular font-normal pb-5">
              We are ready to deliver
            </Text>

            <View className="flex-row items-center gap-3">
              <View className="flex-1 bg-white flex-row items-center justify-center h-[40px] rounded-xl gap-4">
                <VicIcon />
                <Text className="text-text16 font-heebo-regular font-normal">
                  VIC 380
                </Text>
              </View>
              <View className="flex-1 bg-white flex-row items-center justify-center h-[40px] rounded-xl gap-4">
                <TripIcon />
                <Text className="text-text16 font-heebo-regular font-normal">
                  Trip #137380
                </Text>
              </View>
            </View>
          </View>

          <Text className="pt-8 font-heebo-bold text-text20 font-bold">
            Pre Trip Tasks
          </Text>

          <View>
            <FlatList
              data={homeData}
              numColumns={2}
              scrollEnabled={false}
              keyExtractor={item => item?.id.toString()}
              renderItem={renderTripItems}
              ListHeaderComponent={listHeaderComponent}
              ListFooterComponent={listFooterComponent}
              ItemSeparatorComponent={itemSeparatorComponent}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
