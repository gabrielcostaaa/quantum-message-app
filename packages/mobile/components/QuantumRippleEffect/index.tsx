import QuantumColors from '@/constants/colors';
import { Pressable, PressableProps, Platform, StyleProp, ViewStyle } from 'react-native';

interface QuantumRippleEffectProps extends PressableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  rippleColor?: string;
}

export default function QuantumRippleEffect({
  children,
  style,
  rippleColor = QuantumColors.ripple,
  ...rest
}: QuantumRippleEffectProps) {
  return (
    <Pressable
      android_ripple={{ color: rippleColor }}
      style={({ pressed }) => [
        style,
        Platform.OS === 'ios' && pressed && { opacity: 0.7 },
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
}