import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CustomInput,
  Header,
  NoSaleReasonModal,
  SaleStoreDetailModal,
} from '../../../components';
import {
  CallIcon,
  CameraBlue,
  CrossIcon,
  DocumentCross,
  DownArrow,
  EditPencil,
  GraphIcon,
  HouseIcon,
  LocationPin,
  LocationPinWhite,
  MultiUserIcon,
  PersonIcon,
  RightArrow,
  VisitTime,
} from '../../../utils/Svgs';
import {colors} from '../../../utils/Colors';
import FastImage from 'react-native-fast-image';
import {images} from '../../../utils/Images';
import {useNavigation} from '@react-navigation/native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../utils/Constant';

const DATA = Array.from({length: 2}, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

const DropdownContentItem = ({title, value}: any) => {
  return (
    <View className="flex-row items-center pt-[14px]">
      <Text className="flex-[1.5] font-heebo400 font-normal text-text14 text-gray20">
        {title}
      </Text>
      <Text className="px-[20px] text-gray20">-</Text>
      <Text className="flex-[3] font-heebo400 font-normal text-text16 text-black80">
        {value}
      </Text>
    </View>
  );
};

const DetailsIconText = ({icon, title}: any) => {
  return (
    <View className="flex-row items-start">
      <View className="self-start">{icon}</View>
      <Text className="px-4 text-text16 font-Heebo-Regular font-normal text-black80">
        {title}
      </Text>
    </View>
  );
};

const SalesPlanDetail = () => {
  const {navigate} = useNavigation<any>();

  const [deliveryText, setDeliveryText] = useState('');
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [showSaleReasonModal, setShowSaleReasonModal] = useState(false);
  const [saleReason, setSaleReason] = useState('');
  const [showSaleStoreModal, setShowSaleStoreModal] = useState(false);

  const onChangeDeliveryText = (text: string) => {
    setDeliveryText(text);
  };

  const onPressTopDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  const onPressNoSaleRequired = () => {
    setShowSaleReasonModal(true);
  };

  const onCloseSaleModal = () => {
    setShowSaleReasonModal(false);
  };

  const onPressSaleSave = (text: string) => {
    setSaleReason(text);
    onCloseSaleModal();
  };

  const onPressVisitCustomer = () => {
    setShowSaleStoreModal(true);
  };

  const onCloseSaleStoreModal = () => {
    setShowSaleStoreModal(false);
  };

  const onPressSaleConfirm = () => {
    onCloseSaleStoreModal();
    navigate('StoreActivity');
  };

  const renderImageItem = () => {
    return (
      <View className="w-[104px] h-[123px] rounded overflow-hidden relative">
        <FastImage
          source={images.saleDummyImg}
          resizeMode="cover"
          style={{width: '100%', height: '100%'}}
        />
        <TouchableOpacity className="absolute right-[2px] top-[2px] bg-white w-[20px] h-[20px] items-center justify-center rounded-tr-[5px] rounded-bl-[5px]">
          <CrossIcon width={8} height={8} />
        </TouchableOpacity>
      </View>
    );
  };

  const itemSeparatorComponent = () => (
    <View style={{width: WINDOW_WIDTH * 0.0533}} />
  );

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} className="bg-blue100" />

      <Header
        title="O Marche IGA X-Press"
        showBack
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerContainer}
        rightSource={<EditPencil />}
      />

      <View>
        <TouchableOpacity
          onPress={onPressTopDropdown}
          className="h-[39px] flex-row items-center bg-blue90 px-[20px]">
          <Text className="flex-1 text-text16 text-black80 font-heebo400 font-normal">
            O Marche IGA X-Press
          </Text>
          <DownArrow width={16} height={16} />
        </TouchableOpacity>

        {isShowDropdown && (
          <View className="absolute top-[39px] w-full z-[999] bg-blue90 px-[20px] rounded-b-[16px]">
            <View className="h-[1px] bg-gray90 mt-[4px]" />
            <DropdownContentItem title={'Customer ID'} value={'1623660'} />
            <DropdownContentItem
              title={'Terms'}
              value={'Last Day Next Month'}
            />
            <DropdownContentItem title={'Price Group'} value={'O Marche NIC'} />
            <DropdownContentItem title={'Visit'} value={'Weekly'} />
            <DropdownContentItem title={'Store No'} value={'1211'} />
            <View className="pb-[20px]" />
          </View>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="px-[20px] pb-[30px]">
          <Text className="pt-[20px] pb-[8px] text-text14 text-gray50 font-heebo400 font-normal">
            Company Details
          </Text>
          <View
            className="bg-white rounded-[8px] shadow-md py-[13px] px-[12px]"
            style={styles.shadowStyle}>
            <DetailsIconText
              icon={<HouseIcon />}
              title={'O Marche IGA X-press'}
            />
            <View className="pt-[15px]" />
            <DetailsIconText
              icon={<DocumentCross />}
              title={'Tax ID - 99615797558'}
            />
          </View>

          <Text className="pt-[20px] pb-[8px] text-text14 text-gray50 font-heebo400 font-normal">
            Contact Details
          </Text>
          <View
            className="bg-white rounded-[8px] shadow-md py-[13px] px-[12px]"
            style={styles.shadowStyle}>
            <DetailsIconText
              icon={<LocationPin />}
              title={'99 Spencer St, Docklands, VIC 3008, Australia'}
            />
            <View className="pt-[15px]" />
            <DetailsIconText icon={<CallIcon />} title={'03 9640 0962'} />
          </View>

          <Text className="pt-[20px] pb-[8px] text-text14 text-gray50 font-heebo400 font-normal">
            Customer Type
          </Text>
          <View
            className="bg-white rounded-[8px] shadow-md py-[13px] px-[12px]"
            style={styles.shadowStyle}>
            <DetailsIconText icon={<PersonIcon />} title={'Route Other'} />
          </View>

          <Text className="pt-[20px] pb-[8px] text-text14 text-gray50 font-heebo400 font-normal">
            Visit Window
          </Text>
          <View
            className="bg-white rounded-[8px] shadow-md py-[13px] px-[12px]"
            style={styles.shadowStyle}>
            <DetailsIconText
              icon={<VisitTime width={18.34} height={15.41} />}
              title={'10:00 AM - 12:00 AM'}
            />
          </View>

          <Text className="pt-[20px] pb-[8px] text-text14 text-gray50 font-heebo400 font-normal">
            Delivery Instructions
          </Text>
          <View>
            <CustomInput
              multiline
              value={deliveryText}
              onChangeText={onChangeDeliveryText}
              containerStyle={{height: WINDOW_HEIGHT * 0.15}}
              placeholder="Write Here"
              placeholderColor={colors.gray90}
              inputStyle={{
                padding: WINDOW_WIDTH * 0.032,
                fontSize: WINDOW_WIDTH * 0.0373,
              }}
            />
          </View>

          <Text className="pt-[20px] pb-[8px] text-text14 text-gray50 font-heebo400 font-normal">
            Images
          </Text>
          <View>
            <FlatList
              horizontal
              showsVerticalScrollIndicator={false}
              data={DATA}
              keyExtractor={item => item?.id.toString()}
              renderItem={renderImageItem}
              ItemSeparatorComponent={itemSeparatorComponent}
            />
          </View>

          <TouchableOpacity
            onPress={onPressNoSaleRequired}
            className="flex-row items-center pt-[24px]">
            <GraphIcon />
            <Text className="flex-1 text-text16 text-black90 font-heebo400 font-normal pl-[16px]">
              No Sales Required
            </Text>
            <RightArrow />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPressVisitCustomer}
            className="flex-row items-center pt-[20px]">
            <MultiUserIcon />
            <Text className="flex-1 text-text16 text-black90 font-heebo400 font-normal pl-[16px]">
              Visit Customer
            </Text>
            <RightArrow />
          </TouchableOpacity>

          <View className="flex-row items-center pt-[42px] gap-[20px]">
            <TouchableOpacity className="w-[58px] h-[50.8px] border border-blue100 rounded-[8px] items-center justify-center">
              <CameraBlue />
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-blue100 h-[54px] gap-[9px] rounded-[8px]">
              <LocationPinWhite />
              <Text className="text-text16 text-white font-heebo400 font-normal">
                GPS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <NoSaleReasonModal
        isVisible={showSaleReasonModal}
        value={saleReason}
        onBackdropPress={onCloseSaleModal}
        onPressSave={onPressSaleSave}
      />

      <SaleStoreDetailModal
        isVisible={showSaleStoreModal}
        onBackdropPress={onCloseSaleStoreModal}
        onPressConfirm={onPressSaleConfirm}
      />

      <SafeAreaView edges={['bottom']} />
    </View>
  );
};

export default SalesPlanDetail;

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
