import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {colors} from '../../utils/Colors';
import {CrossIcon} from '../../utils/Svgs';
import DropdownInput from '../common/DropdownInput';
import {dropdownData} from '../../utils/ConstantData';
import {Button} from 'react-native-ui-lib';
import {ms} from 'react-native-size-matters';

type EndingLocationModalProps = {
  isVisible: boolean;
  value: string;
  onBackdropPress: () => void;
  onPressSave: (selectedDay: string) => void;
};

const EndingLocationModal = ({
  isVisible,
  value,
  onBackdropPress,
  onPressSave,
}: EndingLocationModalProps) => {
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
            Select Ending Location
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
            placeholder={'Delivery from Vechicle'}
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

export default EndingLocationModal;

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
  },
});
