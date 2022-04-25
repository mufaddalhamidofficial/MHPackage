import * as React from 'react';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

interface CustomTextInputProps extends TextInputProps {
  heading?: string;
  error?: string;
  setError?: (val: string) => void;
  headingStyle: TextStyle;
  leftError?: boolean;
  renderTextInput?: (props: TextInputProps) => React.ReactNode;
  containerStyle?: ViewStyle;
  leftXml?: string;
  rightXml?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  theme?: typeof DefaultTheme;
}

export default function TextInput(props: CustomTextInputProps): React.ReactNode;
