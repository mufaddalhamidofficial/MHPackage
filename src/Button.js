import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native';
import TextFormatted from './TextFormatted';

export default function Button({ text, render, onPress, loading, color, disabled, containerStyle, textStyle, style, theme }) {
  return (
    <TouchableOpacity style={style} activeOpacity={disabled ? 1 : 0.7} disabled={disabled} onPress={loading ? null : onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color || theme.colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
          },
          containerStyle,
        ]}
      >
        {loading ? (
          <ActivityIndicator color='#fff' />
        ) : (
          render?.([textStyle]) || <TextFormatted style={[styles.text, textStyle]}>{text}</TextFormatted>
        )}
      </View>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    color: '#fff',
  },
});
