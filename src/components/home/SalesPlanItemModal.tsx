import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {colors} from '../../utils/Colors';
import {ms} from 'react-native-size-matters';
import {CrossIcon, OrderIcon, UserIcon} from '../../utils/Svgs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

type SalesPlanItemModalProps = {
  isVisible: boolean;
  onBackdropPress: () => void;
};

const SalesPlanItemModal: React.FC<SalesPlanItemModalProps> = ({
  isVisible,
  onBackdropPress,
}) => {
  const {bottom} = useSafeAreaInsets();
  const {navigate} = useNavigation<any>();

  const onPressCustomerDetails = () => {
    onBackdropPress();
    navigate('SalesPlanDetail');
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      backdropColor={colors.backDrop}
      style={styles.modalStyle}>
      <View
        className="bg-white pt-10 px-10"
        style={{
          paddingBottom: bottom + ms(16),
        }}>
        <View className="flex-row items-center pb-[12px]">
          <Text className="flex-1 text-[18px] font-Heebo-Bold font-bold text-black90">
            O Marche IGA X-Press
          </Text>
          <TouchableOpacity
            onPress={onBackdropPress}
            className="w-[30px] h-[30px] items-center justify-center">
            <CrossIcon />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="flex-row items-center py-[10px] gap-5"
          onPress={onPressCustomerDetails}>
          <UserIcon width={ms(18)} height={ms(18)} />
          <Text className="text-[16px] font-Heebo-Regular font-normal text-black90">
            Customer Details
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-[10px] gap-5">
          <OrderIcon width={ms(18)} height={ms(18)} />
          <Text className="text-[16px] font-Heebo-Regular font-normal text-black90">
            View Order
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SalesPlanItemModal;

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end',
  },
});
