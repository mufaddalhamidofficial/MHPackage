import React from 'react';
import { ColorValue } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

interface HeaderProps {
  onPress?: () => void;
  title?: String;
  backgroundColor?: ColorValue;
  right?: React.ReactNode;
  left?: React.ReactNode;
  centerTitle?: Boolean;
  theme?: typeof DefaultTheme;
}

export default function Header(props: HeaderProps): React.ReactNode;
