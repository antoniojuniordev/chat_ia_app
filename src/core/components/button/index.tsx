import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';
import Send from 'core/assets/icons/send.png';
import * as Styled from './styles';

interface PropsButton extends TouchableOpacityProps {
  load: boolean
}

export default function Button({
  onPress,
  load,
  ...rest
}: PropsButton) {
  return (
    <Styled.Button
      {...rest}
      onPress={(e: GestureResponderEvent) => {
        if (onPress && !load) {
          onPress(e);
        }
      }}
    >
      {load ? <ActivityIndicator color="#fff" /> : <Styled.Icon source={Send} />}
    </Styled.Button>
  );
}
