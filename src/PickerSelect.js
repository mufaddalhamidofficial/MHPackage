import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import RNPickerSelect from "react-native-picker-select";

export default function PickerSelect({ size, style, color = "black", mode = "dropdown", ...props }) {
  return (
    <RNPickerSelect
      placeholder={{}}
      {...props}
      Icon={() => (
        <View style={{ alignItems: "center", justifyContent: "center", height: 24, width: 24 }}>
          <Icon name="keyboard-arrow-down" size={size || 24} color={color} />
        </View>
      )}
      pickerProps={{ ...(props?.pickerProps || {}), mode }}
      useNativeAndroidPickerStyle={false}
      fixAndroidTouchableBug
      style={{
        ...(style || {}),
        placeholder: { color: "#000" },
        inputAndroid: {
          paddingVertical: 5,
          paddingLeft: 10,
          paddingRight: 30,
          color: color,
          ...(style?.inputAndroid || {}),
        },
        inputIOSContainer: {
          paddingVertical: 10,
          paddingLeft: 10,
          paddingRight: 30,
          justifyContent: "center",
          ...(style?.inputIOSContainer || {}),
        },
        inputIOS: { color: color, ...(style?.inputIOS || {}) },
        iconContainer: { marginRight: 5, marginTop: 2, ...(style?.iconContainer || {}) },
      }}
    />
  );
}
