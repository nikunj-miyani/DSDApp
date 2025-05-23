import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {colors} from '../../utils/Colors';
import {fontFamily} from '../../utils/Fonts';
import {DownArrow} from '../../utils/Svgs';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils/Constant';

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
    height: WINDOW_HEIGHT * 0.06,
    borderColor: colors.gray90,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: WINDOW_WIDTH * 0.05,
    backgroundColor: colors.white,
  },
  placeholderStyle: {
    fontSize: WINDOW_WIDTH * 0.045,
    color: colors.black90,
    fontFamily: fontFamily.Heebo_400,
  },
  selectedTextStyle: {
    fontSize: WINDOW_WIDTH * 0.045,
    color: colors.black90,
    fontFamily: fontFamily.Heebo_400,
  },
});
