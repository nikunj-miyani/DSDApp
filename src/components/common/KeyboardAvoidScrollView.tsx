import React, {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {GlobalStyles} from '../../utils/GlobalStyles';
import {KeyboardAwareScrollView} from 'react-native-ui-lib';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const KeyboardAvoidScrollView: React.FC<Props> = ({
  containerStyle,
  children,
}) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={[GlobalStyles.flex, containerStyle]}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidScrollView;
