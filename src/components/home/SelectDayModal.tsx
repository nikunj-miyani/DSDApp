import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ms} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';
import DropdownInput from '../common/DropdownInput';
import Modal from 'react-native-modal';
import {CrossIcon} from '../../utils/Svgs';
import {Button} from 'react-native-ui-lib';
import {dropdownData} from '../../utils/ConstantData';

type SelectDayModalProps = {
  isVisible: boolean;
  value: string;
  onBackdropPress: () => void;
  onPressSave: (selectedDay: string) => void;
};

const SelectDayModal = ({
  isVisible,
  value,
  onBackdropPress,
  onPressSave,
}: SelectDayModalProps) => {
  const [selectedDay, setSelectedDay] = useState('');

  const onChangeDaySelect = (text: string) => {
    setSelectedDay(text);
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
        <View className="flex-row items-center pb-[27px]">
          <Text className="flex-1 text-[18px] font-Heebo-Bold font-bold text-black90">
            Select Day
          </Text>
          <TouchableOpacity
            onPress={onBackdropPress}
            className="w-[30px] h-[30px] items-center justify-center">
            <CrossIcon />
          </TouchableOpacity>
        </View>

        <View>
          <DropdownInput
            data={dropdownData}
            value={value}
            placeholder={'My Current Location'}
            onChangeSelect={onChangeDaySelect}
          />

          <Button
            label={'Save'}
            style={{height: ms(54)}}
            borderRadius={8}
            text65R
            onPress={() => onPressSave(selectedDay)}
            className="mt-10 bg-blue100 text-white"
          />
        </View>
      </View>
    </Modal>
  );
};

export default SelectDayModal;

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
  },
});
