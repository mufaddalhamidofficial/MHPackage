import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import TextFormatted from './TextFormatted';
import { useNavigation } from '@react-navigation/native';

export default function Header({ onPress, title, backgroundColor, right, left, centerTitle = true, theme }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: backgroundColor || theme.colors.white,
      }}
    >
      {!!left ? (
        left
      ) : (
        <TouchableOpacity onPress={onPress || (() => navigation.goBack())}>
          <Icon name='chevron-left' size={30} />
        </TouchableOpacity>
      )}
      <View style={{ width: 15 }} />
      <TextFormatted
        style={[
          { fontSize: 16, fontWeight: '700', color: '#000' },
          centerTitle ? { position: 'absolute', left: 0, right: 0, textAlign: 'center' } : {},
        ]}
      >
        {title}
      </TextFormatted>
      <View style={{ flex: 1 }} />
      <Icon name='chevron-left' style={{ opacity: 0 }} size={30} />
      {!!right && <View style={{ position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center' }}>{right}</View>}
    </View>
  );
}
