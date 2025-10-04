import React from 'react';
import { Text, StyleProp, TextStyle, TextProps } from 'react-native';
import QuantumColors from '@/constants/colors';

interface QuantumTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}

export default function QuantumText({
  children,
  style,
  color = QuantumColors.text,
  fontSize = 16,
  fontWeight = '400',
  ...rest
}: QuantumTextProps) {
  return (
    <Text style={[{ color, fontSize, fontWeight }, style]} {...rest}>
      {children}
    </Text>
  );
}