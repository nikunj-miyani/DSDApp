import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../../utils/Colors';
import CustomButton from '../common/CustomButton';
import {CrossIcon, PrinterIcon} from '../../utils/Svgs';

type ConfirmPrinterModalProps = {
  isVisible: boolean;
  onBackdropPress: () => void;
  onPressYes?: () => void;
};

const ConfirmPrinterModal: React.FC<ConfirmPrinterModalProps> = ({
  isVisible,
  onBackdropPress,
  onPressYes,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackdropPress}
      backdropColor={colors.backDrop}
      style={{justifyContent: 'flex-end'}}>
      <View className="bg-white rounded-3xl px-5 pt-16 pb-8 items-center">
        <TouchableOpacity
          onPress={onBackdropPress}
          className="absolute right-[12px] top-[12px] p-[8px]">
          <CrossIcon />
        </TouchableOpacity>

        <View className="w-[90px] h-[90px] bg-blue90 items-center justify-center rounded-full">
          <PrinterIcon />
        </View>

        <Text className="pt-[15px] pb-[30px] px-[50px] text-center text-[18px] text-black font-heebo400">
          Do you want to print to your Printer now?
        </Text>

        <View className="flex-row items-center gap-6">
          <View className="flex-1">
            <CustomButton
              title={'No'}
              onPressButton={onBackdropPress}
              containerStyle={styles.closeButtonStyle}
              titleStyle={{color: colors.gray50}}
            />
          </View>
          <View className="flex-1">
            <CustomButton title={'Yes'} onPressButton={onPressYes} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmPrinterModal;

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
  },
  closeButtonStyle: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray80,
  },
});
