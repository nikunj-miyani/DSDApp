import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../../utils/Colors';
import FastImage from 'react-native-fast-image';
import {images} from '../../utils/Images';
import {ms} from 'react-native-size-matters';
import CustomButton from '../common/CustomButton';

type SaleStoreDetailModalProps = {
  isVisible: boolean;
  onBackdropPress: () => void;
  onPressConfirm?: () => void;
};

const SaleStoreDetailModal: React.FC<SaleStoreDetailModalProps> = ({
  isVisible,
  onBackdropPress,
  onPressConfirm,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      backdropColor={colors.backDrop}
      style={styles.modalStyle}>
      <View className="bg-white rounded-3xl px-5 py-8 items-center">
        <FastImage
          source={images.reactNativeImg}
          resizeMode="contain"
          style={{width: ms(75), height: ms(75)}}
        />
        <Text className="pt-[22px] text-[18px] text-black90 font-heebo700 font-bold">
          NOT AT THE STORE
        </Text>

        <Text className="py-[24px] text-[18px] text-powder100 font-heebo400 font-normal">
          O Marche IGA X-Press
        </Text>

        <Text className="pb-[24px] text-[18px] text-black90 font-heebo400 font-normal">
          You do not appear to be at the store selected. Please confirm you wish
          to proceed with this store or return to select another
        </Text>

        <View className="flex-row items-center gap-6">
          <View className="flex-1">
            <CustomButton
              title={'Close'}
              onPressButton={onBackdropPress}
              containerStyle={styles.closeButtonStyle}
              titleStyle={{color: colors.blue100}}
            />
          </View>
          <View className="flex-1">
            <CustomButton title={'Confirm'} onPressButton={onPressConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SaleStoreDetailModal;

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
  },
  closeButtonStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.blue100,
  },
});
