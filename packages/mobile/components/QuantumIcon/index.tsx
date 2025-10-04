import { Pressable } from 'react-native';
import { LucideProps } from 'lucide-react-native';
import { iconMap, IconName } from './icon-map';
import QuantumColors from '@/constants/colors';

interface QuantumIconProps extends LucideProps {
  name: IconName;
  onPress?: () => void;
}

export default function QuantumIcon({
  name,
  onPress,
  color = QuantumColors.text,
  size = 24,
  ...rest
}: QuantumIconProps) {
  const IconComponent = iconMap[name] || iconMap['AlertCircle'];

  const iconElement = <IconComponent color={color} size={size} {...rest} />;

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        {iconElement}
      </Pressable>
    );
  }

  return iconElement;
}