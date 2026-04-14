import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';

interface ChipProps {
  label: string;
  isActive?: boolean;
  onPress: () => void;
}

export const Chip: React.FC<ChipProps> = ({ label, isActive = false, onPress }) => (
  <TouchableOpacity
    style={[styles.chip, isActive && styles.activeChip]}
    onPress={onPress}
  >
    <Text style={[styles.text, isActive && styles.activeText]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: Colors.primary_mid,
    borderWidth: 1,
    borderColor: Colors.primary_mid,
    marginRight: 7,
    marginBottom: 8,
  },
  activeChip: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  text: {
    ...Typography.labelSmall,
    color: Colors.primary,
  },
  activeText: {
    color: '#FFFFFF',
  },
});
