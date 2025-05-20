import React, {ReactNode} from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface Props {
  value?: string;
  placeholder?: string;
  placeholderColor?: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  multiline?: boolean;
  maxLength?: number;
  editable?: boolean;
  onChangeText?: (text: string) => void;
  onPressRight?: () => void;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  rightSource?: ReactNode;
}

const CustomInput: React.FC<Props> = ({
  value = '',
  placeholder = '',
  placeholderColor = '#B0B0B0',
  keyboardType = 'default',
  secureTextEntry = false,
  multiline = false,
  maxLength,
  editable = true,
  onChangeText,
  inputStyle,
  containerStyle,
  rightSource,
  onPressRight,
}) => {
  return (
    <View
      className="h-[54px] border border-gray90 rounded-[8px] overflow-hidden flex-row items-center"
      style={containerStyle}>
      <TextInput
        className="flex-1 h-full pl-[20px] text-[16px] text-black90 font-heebo400"
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        maxLength={maxLength}
        editable={editable}
      />

      {rightSource && (
        <TouchableOpacity
          onPress={onPressRight}
          className="h-full w-[54px] items-center justify-center">
          {rightSource}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
