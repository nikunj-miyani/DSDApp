import React from 'react';
import {TextStyle} from 'react-native';
import {TextField as UITextField} from 'react-native-ui-lib';
import {colors} from '../../utils/Colors';
import {GlobalStyles} from '../../utils/GlobalStyles';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  inputStyle?: TextStyle;
  className?: string;
}

const TextField: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  inputStyle,
  className,
}) => {
  return (
    <UITextField
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.gray80}
      containerStyle={[GlobalStyles.flex, inputStyle]}
      className={`h-[54] px-6 border border-gray90 rounded-lg overflow-hidden text-text16 font-Heebo-Regular text-black90 ${
        className ?? ''
      }`}
    />
  );
};

export default TextField;
