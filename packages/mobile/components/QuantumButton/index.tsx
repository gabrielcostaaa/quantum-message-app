import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';

import { styles } from './styles';
import { IconName } from '../QuantumIcon/icon-map';
import QuantumColors from '@/constants/colors';
import QuantumIcon from '../QuantumIcon';
import QuantumRippleEffect from '../QuantumRippleEffect';
import QuantumText from '../QuantumText';

interface QuantumButtonProps {
  text?: string;
  onPress?: () => void;
  type?: 'solid' | 'outlined' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  disabled?: boolean;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function QuantumButton({
  text,
  onPress,
  type = 'solid',
  size = 'medium',
  color,
  leftIcon,
  rightIcon,
  disabled = false,
  isLoading = false,
  style,
}: QuantumButtonProps) {
  const isDisabled = disabled || isLoading;
  const primaryColor = color || QuantumColors.primary;

  const containerStyle: StyleProp<ViewStyle>[] = [styles.container, styles[`${size}Container`]];
  let textColor = QuantumColors.text;

  if (type === 'solid') {
    containerStyle.push([styles.solidContainer, { backgroundColor: primaryColor }]);
    textColor = QuantumColors.primaryText;
  } else if (type === 'outlined') {
    containerStyle.push([styles.outlinedContainer, { borderColor: primaryColor }]);
    textColor = primaryColor;
  } else if (type === 'transparent') {
    containerStyle.push(styles.transparentContainer);
    textColor = primaryColor;
  }

  if (isDisabled) {
    containerStyle.push(styles.disabledContainer);
    textColor = QuantumColors.disabledText;
  }

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color={textColor} />;
    }
    return (
      <View style={styles.content}>
        {leftIcon && <QuantumIcon name={leftIcon} color={textColor} size={18} />}
        {text && <QuantumText color={textColor} fontSize={16} fontWeight="600">{text}</QuantumText>}
        {rightIcon && <QuantumIcon name={rightIcon} color={textColor} size={18} />}
      </View>
    );
  };

  return (
    <QuantumRippleEffect
      onPress={onPress}
      disabled={isDisabled}
      style={[containerStyle, style]}
      rippleColor={color ? `${color}40` : QuantumColors.ripple}
    >
      {renderContent()}
    </QuantumRippleEffect>
  );
}