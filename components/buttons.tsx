import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Colors } from '@/constants/colors';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  disabled = false,
  style,
}) => (
  <TouchableOpacity
    style={[
      styles.primary,
      disabled && styles.disabled,
      style,
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.primaryText}>{label}</Text>
  </TouchableOpacity>
);

interface SecondaryButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label,
  onPress,
  style,
}) => (
  <TouchableOpacity style={[styles.secondary, style]} onPress={onPress}>
    <Text style={styles.secondaryText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  disabled: {
    opacity: 0.6,
  },
  secondary: {
    backgroundColor: Colors.primary_light,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.primary_mid,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
});
