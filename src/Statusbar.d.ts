import React from 'react';
import { ColorValue, StatusBarProps, StatusBarStyle } from 'react-native';

interface HeaderProps {
  backgroundColor?: ColorValue;
  props?: StatusBarProps;
  barStyle?: StatusBarStyle;
  hidden?: Boolean;
}

export default function Header(props: HeaderProps): React.ReactNode;
