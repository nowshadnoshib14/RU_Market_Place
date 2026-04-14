import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/colors';
import { Feather } from '@expo/vector-icons';

interface AppBarProps {
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  onBackPress?: () => void;
  rightElement?: React.ReactNode;
}

export const AppBar: React.FC<AppBarProps> = ({
  title,
  subtitle,
  showLogo = false,
  onBackPress,
  rightElement,
}) => (
  <View style={styles.container}>
    {onBackPress ? (
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Feather name="chevron-left" size={20} color={Colors.primary} />
      </TouchableOpacity>
    ) : null}
    
    {showLogo ? (
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>RU</Text>
        </View>
        <View style={styles.logoTextContainer}>
          <Text style={styles.title}>RU Marketplace</Text>
          <Text style={styles.subtitle}>University Of Rajshahi</Text>
        </View>
      </View>
    ) : title ? (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    ) : null}

    {rightElement && <View>{rightElement}</View>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 8,
    padding: 4,
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logo: {
    backgroundColor: Colors.primary,
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  logoTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text_main,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 9,
    color: Colors.text_muted,
    fontWeight: '500',
    marginTop: 2,
  },
});
