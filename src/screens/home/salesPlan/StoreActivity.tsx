import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ConfirmPrinterModal,
  CustomButton,
  EndingLocationModal,
  Header,
} from '../../../components';
import {ms} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';
import {RightArrow} from '../../../utils/Svgs';
import {useNavigation} from '@react-navigation/native';

const ActivityItem = ({title, rightText}: any) => {
  return (
    <View
      className="bg-white flex-row items-center px-[12px] py-[16px] rounded-lg"
      style={styles.shadowStyle}>
      <Text className="flex-1 text-[18px] text-black90 font-Heebo-Regular font-normal">
        {title}
      </Text>

      {rightText && (
        <Text className="text-[18px] text-black90 pr-[30px] font-Heebo-Bold font-bold">
          {rightText}
        </Text>
      )}

      <RightArrow />
    </View>
  );
};

const StoreActivity = () => {
  const {navigate} = useNavigation<any>();

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [endLocation, setEndLocation] = useState('Delivery from Vechicle');
  const [showPrinterModal, setShowPrinterModal] = useState(false);

  const onPressSellOrder = () => {
    setShowLocationModal(true);
  };

  const onCloseLocationModal = () => {
    setShowLocationModal(false);
  };

  const onPressLocationSave = (text: string) => {
    setEndLocation(text);
    onCloseLocationModal();
    navigate('NewSaleItem');
  };

  const onPressComplete = () => {
    setShowPrinterModal(true);
  };

  const onClosePrinterModal = () => {
    setShowPrinterModal(false);
  };

  const onPressPrinterYes = () => {
    onClosePrinterModal();
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView edges={['top']} className="bg-blue100" />

      <Header
        title="In Store Activites"
        showBack
        titleStyle={styles.headerTitle}
        containerStyle={styles.headerContainer}
      />

      <View className="h-[39px] justify-center bg-blue90 px-[20px]">
        <Text className="text-[16px] text-black90 font-Heebo-Regular font-normal">
          O Marche IGA X-Press
        </Text>
      </View>

      <ScrollView className="flex-1 px-[20px]">
        <Text className="pt-[18px] text-[18px] text-black90 pb-[12px] font-Heebo-Bold font-bold">
          Make Sales
        </Text>

        <View className="bg-[#EAF1FF] pl-[14px] rounded-lg">
          <View className="flex-row items-center p-[12px] border-b border-sky30">
            <View className="flex-1 border-r border-sky30">
              <Text className="text-[16px] text-gray50 font-Heebo-Regular font-normal">
                Order Number
              </Text>
              <Text className="pt-[8px] text-[18px] text-black90 font-Heebo-Bold font-bold">
                2651
              </Text>
            </View>

            <View className="flex-1 pl-[40px]">
              <Text className="text-[16px] text-gray50 font-Heebo-Regular font-normal">
                Pre Order Ref
              </Text>
              <Text className="pt-[8px] text-[18px] text-black90 font-Heebo-Bold font-bold">
                cc4
              </Text>
            </View>
          </View>

          <View className="pt-[12px] pb-[17px]">
            <Text className="text-[16px] text-gray50 font-Heebo-Regular font-normal">
              Delivery Instruction
            </Text>
            <Text className="pt-[8px] text-[18px] text-black90 font-Heebo-Bold font-bold">
              Do Not Deliver at 8:00 AM
            </Text>
          </View>
        </View>

        <View className="pt-[24px]">
          <ActivityItem title={'Pickup Returns'} />
          <View className="h-[20px]" />
          <ActivityItem title={'Collect Payment'} />
          <View className="h-[20px]" />
          <ActivityItem title={'View Previous Invoices'} rightText={'2,65'} />
          <View className="h-[20px]" />
          <ActivityItem title={'Manage Equipment'} />
          <View className="h-[20px]" />
        </View>
      </ScrollView>

      <View className="px-[20px] pt-[20px]">
        <View className="flex-row items-center gap-6">
          <View className="flex-1">
            <CustomButton
              title={'Sell Order'}
              onPressButton={onPressSellOrder}
              containerStyle={styles.closeButtonStyle}
              titleStyle={{color: colors.blue100}}
            />
          </View>
          <View className="flex-1">
            <CustomButton title={'Complete'} onPressButton={onPressComplete} />
          </View>
        </View>
      </View>

      <EndingLocationModal
        isVisible={showLocationModal}
        value={endLocation}
        onBackdropPress={onCloseLocationModal}
        onPressSave={onPressLocationSave}
      />

      <ConfirmPrinterModal
        isVisible={showPrinterModal}
        onBackdropPress={onClosePrinterModal}
        onPressYes={onPressPrinterYes}
      />

      <SafeAreaView edges={['bottom']} />
    </View>
  );
};

export default StoreActivity;

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
  closeButtonStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.blue100,
  },
});
