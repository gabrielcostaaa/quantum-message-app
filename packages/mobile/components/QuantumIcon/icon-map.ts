import {
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  AlertCircle,
  LucideProps,
} from 'lucide-react-native';
import React from 'react';

export type IconName = 'Camera' | 'Check' | 'ChevronLeft' | 'ChevronRight' | 'Eye' | 'EyeOff' | 'AlertCircle';

export const iconMap: Record<IconName, React.FC<LucideProps>> = {
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  AlertCircle,
};