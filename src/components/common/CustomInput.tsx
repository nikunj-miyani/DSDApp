import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {ms} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';
import {fontFamily} from '../../utils/Fonts';

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
  placeholderColor = colors.gray80,
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
    <View style={[styles.containerStyle, containerStyle]}>
      <TextInput
        style={[styles.inputStyle, inputStyle]}
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
        <TouchableOpacity onPress={onPressRight} style={styles.rightContainer}>
          {rightSource}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  containerStyle: {
    height: ms(54),
    borderWidth: 1,
    borderColor: colors.gray90,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    paddingLeft: ms(20),
    fontSize: ms(16),
    fontFamily: fontFamily.Heebo_400,
    color: colors.black90,
  },
  rightContainer: {
    height: '100%',
    width: ms(54),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
