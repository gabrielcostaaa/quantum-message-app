
import React from 'react';
import { Text, StyleProp, TextStyle, TextProps } from 'react-native';
import QuantumColors from '@/constants/colors';

type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type FontStyle = 'normal' | 'italic';

interface QuantumTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
}

const fontMap: Record<FontWeight, Record<FontStyle, string>> = {
  '100': { normal: 'Inter_100Thin', italic: 'Inter_100Thin_Italic' },
  '200': { normal: 'Inter_200ExtraLight', italic: 'Inter_200ExtraLight_Italic' },
  '300': { normal: 'Inter_300Light', italic: 'Inter_300Light_Italic' },
  '400': { normal: 'Inter_400Regular', italic: 'Inter_400Regular_Italic' },
  'normal': { normal: 'Inter_400Regular', italic: 'Inter_400Regular_Italic' },
  '500': { normal: 'Inter_500Medium', italic: 'Inter_500Medium_Italic' },
  '600': { normal: 'Inter_600SemiBold', italic: 'Inter_600SemiBold_Italic' },
  '700': { normal: 'Inter_700Bold', italic: 'Inter_700Bold_Italic' },
  'bold': { normal: 'Inter_700Bold', italic: 'Inter_700Bold_Italic' },
  '800': { normal: 'Inter_800ExtraBold', italic: 'Inter_800ExtraBold_Italic' },
  '900': { normal: 'Inter_900Black', italic: 'Inter_900Black_Italic' },
};

export default function QuantumText({
  children,
  style,
  color = QuantumColors.primaryText,
  fontSize = 16,
  fontWeight = '400',
  fontStyle = 'normal',
  ...rest
}: QuantumTextProps) {
  const fontFamily = fontMap[fontWeight]?.[fontStyle] || fontMap['400']['normal'];

  const textStyle: StyleProp<TextStyle> = [{ color, fontSize, fontFamily }, style];
  if (typeof style === 'object' && style !== null && 'fontWeight' in style) {
    delete (style as any).fontWeight;
  }

  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  );
}