import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { Feather, AntDesign } from '@expo/vector-icons';

interface BottomTabNavProps {
  activeTab: 'home' | 'search' | 'post' | 'messages' | 'profile';
  onTabPress: (tab: 'home' | 'search' | 'post' | 'messages' | 'profile') => void;
}

export const BottomTabNav: React.FC<BottomTabNavProps> = ({ activeTab, onTabPress }) => {
  const tabs = [
    { id: 'home' as const, icon: 'home', label: 'Home' },
    { id: 'search' as const, icon: 'search', label: 'Search' },
    { id: 'post' as const, icon: 'plus', label: 'Post', isFab: true },
    { id: 'messages' as const, icon: 'message-square', label: 'Messages' },
    { id: 'profile' as const, icon: 'user', label: 'Profile' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[
            styles.tab,
            tab.isFab && styles.fabTab,
            activeTab === tab.id && !tab.isFab && styles.activeTab,
          ]}
          onPress={() => onTabPress(tab.id)}
        >
          {tab.isFab ? (
            <View style={styles.fab}>
              <Feather name={tab.icon as any} size={20} color="white" />
            </View>
          ) : (
            <>
              <Feather
                name={tab.icon as any}
                size={20}
                color={activeTab === tab.id ? Colors.primary : Colors.text_muted}
              />
              <Text
                style={[
                  styles.label,
                  activeTab === tab.id && styles.activeLabel,
                ]}
              >
                {tab.label}
              </Text>
            </>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingBottom: 2,
    alignItems: 'flex-end',
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 8,
    paddingBottom: 4,
    gap: 2,
  },
  fabTab: {
    marginTop: -8,
  },
  fab: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  activeTab: {
    marginTop: 0,
  },
  label: {
    ...Typography.captionSmall,
    color: Colors.text_muted,
  },
  activeLabel: {
    color: Colors.primary,
    fontWeight: '700',
  },
});
