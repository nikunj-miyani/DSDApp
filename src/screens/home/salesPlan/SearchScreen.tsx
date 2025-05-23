import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../components';
import {colors} from '../../../utils/Colors';
import {productItems} from '../../../utils/ConstantData';
import FastImage from 'react-native-fast-image';
import {PlusIcon} from '../../../utils/Svgs';
import {WINDOW_WIDTH} from '../../../utils/Constant';

const SearchScreen = () => {
  const renderItem = ({item}: any) => {
    return (
      <View
        className="bg-white flex-row items-center rounded-xl py-4 px-2"
        style={styles.shadowStyle}>
        <FastImage
          source={item?.img}
          resizeMode="contain"
          style={{width: ms(85), height: ms(89), borderRadius: 5}}
        />

        <View className="flex-1 gap-1 pl-2">
          <Text className="text-black80 text-text16 font-Heebo-Bold font-bold">
            {item?.title}
          </Text>

          <View className="flex-row items-center">
            <View className="w-1/2">
              <Text className="text-text14 font-Heebo-Regular font-normal text-gray50">
                {item?.productId}
              </Text>
            </View>

            <View className="w-[1px] bg-gray90 h-[14px] mr-5" />

            <View className="w-1/2">
              <Text className="text-text14 font-Heebo-Regular font-normal text-green100">
                In Stock: {item?.qty}
              </Text>
            </View>
          </View>

          <TouchableOpacity className="flex-row items-center justify-center border rounded border border-blue100 w-[105px] h-[30px] mt-3 gap-3">
            <PlusIcon />
            <Text className="text-text14 font-Heebo-Regular font-normal text-blue100">
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const itemSeparatorComponent = () => (
    <View style={{height: WINDOW_WIDTH * 0.048}} />
  );
  const listHeaderComponent = <View style={{height: WINDOW_WIDTH * 0.042}} />;

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} className="bg-blue100" />

      <Header
        title="Search"
        showBack
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerContainer}
      />

      <FlatList
        data={productItems}
        keyExtractor={item => item?.id.toString()}
        renderItem={renderItem}
        style={{paddingHorizontal: WINDOW_WIDTH * 0.053}}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparatorComponent}
        ListHeaderComponent={listHeaderComponent}
      />
      <SafeAreaView edges={['bottom']} />
    </View>
  );
};

export default SearchScreen;

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
    shadowColor: colors.gray30,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
