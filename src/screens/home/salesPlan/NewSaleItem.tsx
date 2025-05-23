import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomButton, CustomInput, Header} from '../../../components';
import {
  FilterIcon,
  MainMenuIcon,
  PlusIcon,
  ScannerIcon,
  SearchIcon,
  SortIcon,
} from '../../../utils/Svgs';
import {colors} from '../../../utils/Colors';
import {productItems} from '../../../utils/ConstantData';
import FastImage from 'react-native-fast-image';
import {WINDOW_WIDTH} from '../../../utils/Constant';

const NewSaleItem = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const onChangeProduct = (text: string) => {
    setProduct(text);
  };

  const onChangeQuantity = (text: string) => {
    setQuantity(text);
  };

  const renderItem = ({item}) => {
    return (
      <View
        className="bg-white flex-row items-center rounded-xl py-4 px-4"
        style={styles.shadowStyle}>
        <FastImage
          source={item?.img}
          resizeMode="contain"
          style={{
            width: WINDOW_WIDTH * 0.194,
            height: WINDOW_WIDTH * 0.184,
            borderRadius: 5,
          }}
        />
        <View className="gap-2 pl-1">
          <Text className="text-black80 text-text16 font-bold font-Heebo-Bold">
            {item?.title}
          </Text>
          <Text className="text-gray50 text-text14 font-Heebo-Regular font-normal">
            {item?.productId}
          </Text>
          <Text className="text-gray50 text-text14 font-Heebo-Regular font-normal">
            Quantity - {item?.qty}
          </Text>
        </View>

        <TouchableOpacity
          className="absolute"
          style={{bottom: WINDOW_WIDTH * 0.032, right: WINDOW_WIDTH * 0.037}}>
          <Text className="text-red100 text-text14 font-Heebo-Regular font-normal">
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const itemSeparatorComponent = () => (
    <View style={{height: WINDOW_WIDTH * 0.048}} />
  );
  const listHeaderComponent = <View style={{height: WINDOW_WIDTH * 0.043}} />;

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} className="bg-blue100" />

      <Header
        title="Sales New Item"
        showBack
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerContainer}
        rightSource={<SearchIcon />}
      />

      <View className="h-[39px] justify-center bg-blue90 px-[20px]">
        <Text className="text-[16px] text-black90 font-Heebo-Regular font-normal">
          O Marche IGA X-Press
        </Text>
      </View>

      <View className="flex-1">
        <View className="flex-row items-center pt-6 pb-5 px-6">
          <Text className="flex-1 text-black100 text-[18px] font-Heebo-Bold font-normal">
            Add Items
          </Text>
          <View className="flex-row items-center gap-6">
            <TouchableOpacity>
              <SortIcon />
            </TouchableOpacity>
            <TouchableOpacity>
              <FilterIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View
          className="bg-white rounded-xl px-4 py-6 mx-6"
          style={styles.shadowStyle}>
          <View className="flex-row items-center justify-between w-full pb-5">
            <CustomInput
              containerStyle={{
                width: '66%',
                borderRadius: 4,
                height: WINDOW_WIDTH * 0.109,
              }}
              value={product}
              placeholder="Product ID or Name"
              onChangeText={onChangeProduct}
              placeholderColor={colors.gray90}
            />
            <CustomInput
              containerStyle={{
                width: '28%',
                borderRadius: 4,
                height: WINDOW_WIDTH * 0.109,
              }}
              value={quantity}
              placeholder="QTY"
              keyboardType="numeric"
              onChangeText={onChangeQuantity}
              placeholderColor={colors.gray90}
            />
          </View>

          <TouchableOpacity className="flex-row items-center h-[41px] gap-3 justify-center border border-blue100 rounded">
            <PlusIcon />
            <Text className="text-blue100 text-text16 font-Heebo-Regular font-normal pt-1">
              Add
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <Text className="text-black100 text-[18px] pt-6 font-Heebo-Bold font-bold px-6">
            Item List
          </Text>
          <FlatList
            data={productItems}
            keyExtractor={item => item?.id.toString()}
            renderItem={renderItem}
            style={{paddingHorizontal: WINDOW_WIDTH * 0.053}}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={itemSeparatorComponent}
            ListHeaderComponent={listHeaderComponent}
          />
        </View>

        <View className="flex-row items-center gap-3 py-5 px-6">
          <TouchableOpacity className="w-[58px] h-[50px] items-center justify-center border rounded-lg border-blue100 border">
            <MainMenuIcon />
          </TouchableOpacity>
          <TouchableOpacity className="w-[58px] h-[50px] items-center justify-center border rounded-lg border-blue100 border">
            <ScannerIcon />
          </TouchableOpacity>
          <CustomButton title="Sales" containerStyle={{flex: 1}} />
        </View>
      </View>
      <SafeAreaView edges={['bottom']} />
    </View>
  );
};

export default NewSaleItem;

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'left',
    paddingLeft: WINDOW_WIDTH * 0.107,
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
