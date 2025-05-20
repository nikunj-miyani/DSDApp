import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type CustomButtonProps = {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPressButton?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyle,
  titleStyle,
  onPressButton,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      className="h-[54px] bg-blue100 items-center justify-center rounded-[8px]"
      style={containerStyle}>
      <Text
        className="text-[17px] text-white font-heebo400 font-normal"
        style={titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
