import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../components';
import {ms} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import {productItems} from '../../../utils/ConstantData';
import FastImage from 'react-native-fast-image';

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
        <View className="gap-2 pl-1">
          <Text className="text-black80 text-text16 font-bold font-Heebo-Bold">
            {item?.title}
          </Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{backgroundColor: 'red'}}
              className=" text-gray50 text-text14 font-Heebo-Regular font-normal">
              {item?.productId}
            </Text>
            <Text className=" text-gray50 text-text14 font-Heebo-Regular font-normal">
              Quantity - {item?.qty}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const itemSeparatorComponent = () => <View style={{height: ms(18)}} />;
  const listHeaderComponent = <View style={{height: ms(16)}} />;

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
        style={{paddingHorizontal: ms(20)}}
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
    paddingLeft: ms(40),
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
