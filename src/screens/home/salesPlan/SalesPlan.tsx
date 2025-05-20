import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Header,
  LocationChangeModal,
  SalesPlanItemModal,
  SelectDayModal,
} from '../../../components';
import {ms} from 'react-native-size-matters';
import {
  DirectionIcon,
  DownArrow,
  LocationIcon,
  MenuDots,
  SearchIcon,
  ShopIcon,
  SortIcon,
  VisitTime,
} from '../../../utils/Svgs';
import {orderFilterData} from '../../../utils/ConstantData';
import {useNavigation} from '@react-navigation/native';

const DATA = Array.from({length: 20}, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

const SalesPlan = () => {
  const {navigate} = useNavigation<any>();

  const [day, setDay] = useState('Today');
  const [filterData, setFilterData] = useState(orderFilterData);
  const [showSalesItemModal, setShowSalesItemModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showDayModal, setShowDayModal] = useState(false);

  const onPressFilterItem = (item: any) => {
    const updatedData = filterData.map(i => ({
      ...i,
      isSelected: i?.id === item?.id,
    }));
    setFilterData(updatedData);
  };

  const onPressDataItemDots = () => {
    setShowSalesItemModal(true);
  };

  const onCloseSalesPlanModal = () => {
    setShowSalesItemModal(false);
  };

  const onPressDirectionMap = () => {
    setShowLocationModal(true);
  };

  const onCloseLocationModal = () => {
    setShowLocationModal(false);
  };

  const onPressDay = () => {
    setShowDayModal(true);
  };

  const onCloseDayModal = () => {
    setShowDayModal(false);
  };

  const onPressDaySave = (item: any) => {
    setDay(item?.label);
    onCloseDayModal();
  };

  const onPressDataItem = () => {
    navigate('SalesPlanDetail');
  };

  const renderFilterItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => onPressFilterItem(item)}
        className={`flex-row items-center rounded-[6px] py-[6px] px-[18px] gap-3 ${
          item?.isSelected ? 'bg-blue100' : 'bg-sky10'
        }`}>
        {(item?.title === 'Completed' || item?.title === 'Pending') && (
          <View
            className="w-[8px] h-[8px] rounded-full"
            style={{
              backgroundColor:
                item?.title === 'Completed'
                  ? colors.green100
                  : item?.title === 'Pending'
                  ? colors.yellow100
                  : undefined,
            }}
          />
        )}
        <Text
          className={`text-[16px] font-Heebo-Regular font-normal ${
            item?.isSelected ? 'text-white' : 'text-gray50'
          }`}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderDataItem = () => {
    return (
      <TouchableOpacity
        onPress={onPressDataItem}
        className="rounded-[8px] bg-white shadow-md"
        style={styles.shadowStyle}>
        <View className="flex-row items-center rounded-t-[8px] py-[10px] pl-[16px] bg-sky20">
          <View className="w-[8px] h-[8px] rounded-full bg-green100" />
          <Text className="flex-1 pl-[9px] text-[16px] font-Heebo-Regular font-normal text-powder100">
            O Marche IGA X-Press
          </Text>
          <TouchableOpacity
            onPress={onPressDataItemDots}
            className="w-[36px] h-[36px] items-center justify-center">
            <MenuDots />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center p-[12px]">
          <View className="flex-1 flex-row items-start">
            <ShopIcon />
            <View className="pl-[8px]" style={{bottom: ms(4)}}>
              <Text className="text-[14px] font-Heebo-Regular font-normal text-gray50">
                Opening Time
              </Text>
              <Text className="text-[14px] font-Heebo-Regular font-normal text-black90">
                09:00 AM
              </Text>
            </View>
          </View>

          <View className="flex-1 flex-row items-start">
            <VisitTime />
            <View className="pl-[8px]" style={{bottom: ms(4)}}>
              <Text className="text-[14px] font-Heebo-Regular font-normal text-gray50">
                Visit Time
              </Text>
              <Text className="text-[14px] font-Heebo-Regular font-normal text-black90">
                10:00 AM - 12:00 AM
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} className="bg-blue100" />

      <Header
        title="Sales Plan"
        showBack
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerContainer}
        rightSource={<SearchIcon />}
      />

      <View className="flex-1 pt-[16px]">
        <View className="flex-row items-center px-[18px] gap-[16px]">
          <TouchableOpacity
            onPress={onPressDay}
            className="h-[41px] flex-1 flex-row items-center border border-gray90 rounded px-[15px]">
            <Text className="flex-1 text-text16 font-Heebo-Regular text-black90 font-normal">
              {day}
            </Text>
            <DownArrow />
          </TouchableOpacity>

          <View className="h-[41px] flex-row items-center border border-gray90 rounded">
            <TouchableOpacity
              onPress={onPressDirectionMap}
              className="w-[45px] h-full items-center justify-center border-r border-gray90">
              <DirectionIcon />
            </TouchableOpacity>
            <TouchableOpacity className="w-[45px] h-full items-center justify-center">
              <LocationIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View className="pt-[26px] flex-row items-center justify-between px-[18px]">
          <Text className="text-[18px]  font-Heebo-Bold font-bold text-black90">
            Order List
          </Text>
          <TouchableOpacity>
            <SortIcon />
          </TouchableOpacity>
        </View>

        <View className="pt-[16px]">
          <FlatList
            horizontal
            data={filterData}
            keyExtractor={item => item?.id.toString()}
            renderItem={renderFilterItem}
            ListHeaderComponent={<View className="w-[18px]" />}
            ListFooterComponent={<View className="w-[18px]" />}
            ItemSeparatorComponent={() => <View className="w-[12px]" />}
          />
        </View>

        <FlatList
          data={DATA}
          renderItem={renderDataItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id.toString()}
          className="px-[18px]"
          ListHeaderComponent={<View className="h-[18px]" />}
          ItemSeparatorComponent={() => <View className="h-[18px]" />}
        />
      </View>

      <SalesPlanItemModal
        isVisible={showSalesItemModal}
        onBackdropPress={onCloseSalesPlanModal}
      />
      <LocationChangeModal
        isVisible={showLocationModal}
        onBackdropPress={onCloseLocationModal}
      />
      <SelectDayModal
        isVisible={showDayModal}
        value={day}
        onBackdropPress={onCloseDayModal}
        onPressSave={onPressDaySave}
      />

      <SafeAreaView edges={['bottom']} />
    </View>
  );
};

export default SalesPlan;

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'left',
    paddingLeft: ms(40),
    color: colors.white,
  },
  headerContainer: {
    backgroundColor: '#0560FD',
  },
  selectContainer: {
    flex: 1,
    height: ms(41),
    borderRadius: 4,
    paddingHorizontal: ms(15),
  },
  selectPlaceholder: {
    color: colors.gray100,
  },
  shadowStyle: {
    shadowColor: colors.gray30,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
});
