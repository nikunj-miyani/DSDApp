import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomInput, Header} from '../../../components';
import {ms} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import {productItems} from '../../../utils/ConstantData';
import FastImage from 'react-native-fast-image';
import {FilterIcon, GraySearch, PlusIcon, SortIcon} from '../../../utils/Svgs';

const ProductList = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (text: string) => {
    setSearch(text);
  };

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

  const itemSeparatorComponent = () => <View style={{height: ms(18)}} />;
  const listHeaderComponent = <View style={{height: ms(16)}} />;

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} className="bg-blue100" />

      <Header
        title="Product List"
        showBack
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerContainer}
      />

      <View className="flex-row items-center pt-5 px-6 gap-4">
        <CustomInput
          containerStyle={{flex: 1, borderRadius: 4, height: ms(41)}}
          value={search}
          placeholder="Search"
          onChangeText={onChangeSearch}
          placeholderColor={colors.gray90}
          leftSource={<GraySearch />}
          inputStyle={{paddingLeft: 0}}
        />

        <View className="flex-row items-center gap-6">
          <TouchableOpacity>
            <SortIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <FilterIcon />
          </TouchableOpacity>
        </View>
      </View>

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

export default ProductList;

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
