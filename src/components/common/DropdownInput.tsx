import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {ms} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';
import {fontFamily} from '../../utils/Fonts';
import {DownArrow} from '../../utils/Svgs';

type DropdownDataItem = {
  label: string;
  value: string | number;
};

type DropdownInputProps = {
  data: DropdownDataItem[];
  placeholder: string;
  value: string | number;
  onChangeSelect: any;
  dropdownStyle?: ViewStyle;
  placeholderStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
};

const DropdownInput: React.FC<DropdownInputProps> = ({
  data,
  placeholder,
  value,
  onChangeSelect,
  dropdownStyle,
  placeholderStyle,
  selectedTextStyle,
}) => {
  return (
    <Dropdown
      style={[styles.dropdownStyle, dropdownStyle]}
      placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
      selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={onChangeSelect}
      renderRightIcon={() => <DownArrow />}
    />
  );
};

export default DropdownInput;

const styles = StyleSheet.create({
  dropdownStyle: {
    height: ms(50),
    borderColor: colors.gray90,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: ms(20),
    backgroundColor: colors.white,
  },
  placeholderStyle: {
    fontSize: ms(16),
    color: colors.black90,
    fontFamily: fontFamily.Heebo_400,
  },
  selectedTextStyle: {
    fontSize: ms(16),
    color: colors.black90,
    fontFamily: fontFamily.Heebo_400,
  },
});
