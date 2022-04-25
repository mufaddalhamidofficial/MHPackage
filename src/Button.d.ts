import React from 'react';
import { TextStyle, ColorValue, ViewStyle } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

interface ButtonProps {
  text?: String;
  render?: (textStyle: TextStyle) => React.ReactNode;
  onPress?: () => void;
  loading?: Boolean;
  color?: ColorValue;
  disabled?: Boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  style?: ViewStyle;
  theme?: typeof DefaultTheme;
}

export default function Button(props: ButtonProps): React.ReactNode;
