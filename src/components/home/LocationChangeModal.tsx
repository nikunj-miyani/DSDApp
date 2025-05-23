import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {colors} from '../../utils/Colors';
import {CrossIcon} from '../../utils/Svgs';
import {dropdownData} from '../../utils/ConstantData';
import {Button} from 'react-native-ui-lib';
import DropdownInput from '../common/DropdownInput';
import {WINDOW_HEIGHT} from '../../utils/Constant';

type LocationChangeModalProps = {
  isVisible: boolean;
  onBackdropPress: () => void;
};

const LocationChangeModal = ({
  isVisible,
  onBackdropPress,
}: LocationChangeModalProps) => {
  const [startPosition, setStartPosition] = useState('');
  const [endPosition, setEndPosition] = useState('');

  const onChangeStartPosition = (text: string) => {
    setStartPosition(text);
  };
  const onChangeEndPosition = (text: string) => {
    setEndPosition(text);
  };

  const onPressOptimise = () => {
    onBackdropPress();
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
      <View className="bg-white rounded-3xl px-5 py-8">
        <View className="flex-row items-center pb-[12px]">
          <Text className="flex-1 text-[18px] font-Heebo-Bold font-bold text-black90">
            Optimization Locations
          </Text>
          <TouchableOpacity
            onPress={onBackdropPress}
            className="w-[30px] h-[30px] items-center justify-center">
            <CrossIcon />
          </TouchableOpacity>
        </View>

        <View>
          <Text className="pb-2 text-text14 font-Heebo-Regular font-normal text-gray20">
            Starting Location
          </Text>
          <DropdownInput
            data={dropdownData}
            value={startPosition}
            placeholder={'My Current Location'}
            onChangeSelect={onChangeStartPosition}
          />

          <Text className="pt-5 pb-3 text-text14 font-Heebo-Regular font-normal text-gray20">
            Ending Location
          </Text>

          <DropdownInput
            data={dropdownData}
            value={endPosition}
            placeholder={'New Cold'}
            onChangeSelect={onChangeEndPosition}
          />

          <Button
            label={'Optimise'}
            style={{height: WINDOW_HEIGHT * 0.065}}
            borderRadius={8}
            text65R
            onPress={onPressOptimise}
            className="mt-10 bg-blue100 text-white"
          />
        </View>
      </View>
    </Modal>
  );
};

export default LocationChangeModal;

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
  },
});
