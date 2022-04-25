import React from "react";
import { TextProps, TextStyle } from "react-native";

interface TextFormattedProps extends TextProps {
  children: React.ReactNode;
  style: TextStyle | Array<TextStyle>;
  // Here you need not to write fontWeight, if you use fontFamily in styles, their you have to write fontWeight also
  fontFamily?: String;
}

export default function TextFormatted(props: TextFormattedProps): React.ReactNode;
