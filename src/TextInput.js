import React, { useState } from 'react';
import { Platform, StyleSheet, TextInput as RNTextInput, View } from 'react-native';
import TextFormatted from './TextFormatted';

export default function TextInput({
  placeholder,
  heading,
  onChangeText,
  value,
  error,
  setError,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  style,
  headingStyle,
  readOnly,
  leftError = false,
  renderTextInput,
  maxLength,
  minLength,
  containerStyle,
  left,
  right,
  left,
  right,
  theme,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const textInputProps = {
    ...props,
    style: [{ paddingVertical: 0, paddingHorizontal: 10 }, style],
    autoCapitalize: autoCapitalize,
    keyboardType: keyboardType,
    maxLength: maxLength,
    minLength: minLength,
    secureTextEntry: secureTextEntry,
    placeholder: placeholder,
    placeholderTextColor: 'gray',
    value: value,
    editable: !readOnly,
    caretHidden: false,
    onChangeText: (txt) => {
      onChangeText?.(txt);
      setError?.(null);
    },
    caretHidden: false,

    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    borderRadius: 10,
    selectionColor: theme.colors.blue,
  };
  return (
    <View style={[{ elevation: 5 }, containerStyle]}>
      {!!heading && <TextFormatted style={[{ color: theme.colors.secondary }, headingStyle]}>{heading}</TextFormatted>}
      <View
        style={[
          styles.textInput,
          { backgroundColor: '#fff', borderWidth: 1, borderColor: isFocused ? 'transparent' : 'transparent' },
          { flexDirection: 'row' },
        ]}
      >
        {!!leftXml && leftXml}
        {!!left && left}
        <View style={{ flex: 1 }}>{renderTextInput ? renderTextInput(textInputProps) : <RNTextInput {...textInputProps} />}</View>
        {!!right && right}
        {!!rightXml && rightXml}
      </View>
      {error ? (
        <TextFormatted style={[styles.error, { marginHorizontal: leftError ? 0 : 20, color: theme.colors.error }]}>{error}</TextFormatted>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: '#000',
    marginTop: 5,
    fontSize: 13,
    borderRadius: 5,
    fontFamily: 'DMSans-Regular',
    height: Platform.OS == 'ios' ? 50 : null,
    alignItems: 'center',
  },
  error: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '700',
  },
});
