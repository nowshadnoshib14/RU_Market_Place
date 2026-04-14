import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Colors } from '@/constants/colors';
import { ProductCard } from '@/components/ProductCard';
import { BottomTabNav } from '@/components/BottomTabNav';
import { Product } from '@/types';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 34) / 3;

const MOCK_USER = {
  name: 'Md Nowshad Hasan Noshib',
  department: 'CSE 3rd Year, RU',
  location: 'Rajshahi, Bangladesh',
  avatar: 'NHS',
  listings: 7,
  sold: 12,
  saved: 5,
};

const MY_LISTINGS: Product[] = [
  {
    id: '1',
    title: 'MacBook M1',
    price: 42000,
    category: 'Electronics',
    location: 'Hall Road',
    emoji: '💻',
    description: '',
    posted_at: '',
    seller: { id: '', name: '', avatar: '', department: '', rating: 0, reviews: 0, listings: 0 },
  },
  {
    id: '2',
    title: 'Study Chair',
    price: 2200,
    category: 'Furniture',
    location: 'North Campus',
    emoji: '🪑',
    description: '',
    posted_at: '',
    seller: { id: '', name: '', avatar: '', department: '', rating: 0, reviews: 0, listings: 0 },
  },
  {
    id: '3',
    title: 'Math Books',
    price: 580,
    category: 'Books',
    location: 'Campus',
    emoji: '📚',
    description: '',
    posted_at: '',
    seller: { id: '', name: '', avatar: '', department: '', rating: 0, reviews: 0, listings: 0 },
  },
  {
    id: '4',
    title: 'Sony XM4',
    price: 8500,
    category: 'Electronics',
    location: 'Library',
    emoji: '🎧',
    description: '',
    posted_at: '',
    seller: { id: '', name: '', avatar: '', department: '', rating: 0, reviews: 0, listings: 0 },
  },
  {
    id: '5',
    title: 'Org. Chem',
    price: 320,
    category: 'Books',
    location: 'Faculty',
    emoji: '📖',
    description: '',
    posted_at: '',
    seller: { id: '', name: '', avatar: '', department: '', rating: 0, reviews: 0, listings: 0 },
  },
];

const SAVED_ITEMS: Product[] = [
  {
    id: '6',
    title: 'iPhone 13',
    price: 34000,
    category: 'Gadgets',
    location: 'South',
    emoji: '📱',
    description: '',
    posted_at: '',
    seller: { id: '', name: '', avatar: '', department: '', rating: 0, reviews: 0, listings: 0 },
  },
  {
    id: '7',
    title: 'Sony XM4',
    price: 8500,
    category: 'Electronics',
    location: 'Library',
    emoji: '🎧',
    description: '',
    posted_at: '',
    seller: { id: '', name: '', avatar: '', department: '', rating: 0, reviews: 0, listings: 0 },
  },
  {
    id: '8',
    title: 'Engg. Math',
    price: 580,
    category: 'Books',
    location: 'Campus',
    emoji: '📚',
    description: '',
    posted_at: '',
    seller: { id: '', name: '', avatar: '', department: '', rating: 0, reviews: 0, listings: 0 },
  },
];

export interface ProfileScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'detail' | 'profile' | 'add' | 'login') => void;
  onTabPress: (tab: 'home' | 'search' | 'post' | 'messages' | 'profile') => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onNavigate,
  onTabPress,
}) => {
  const [activeTab, setActiveTab] = useState<'listings' | 'saved'>('listings');

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} style={styles.scrollView}>
        {/* Header with user info */}
        <View style={styles.headerBackground}>
          <View style={styles.headerContent}>
            <View style={styles.userInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{MOCK_USER.avatar}</Text>
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{MOCK_USER.name}</Text>
                <Text style={styles.userDeptSmall} numberOfLines={1}>
                  {MOCK_USER.department}
                </Text>
                <Text style={styles.userLocation}>{MOCK_USER.location}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => console.log('Edit profile')}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{MOCK_USER.listings}</Text>
              <Text style={styles.statLabel}>Listings</Text>
            </View>
            <View style={[styles.statItem, styles.statItemBorder]}>
              <Text style={styles.statNumber}>{MOCK_USER.sold}</Text>
              <Text style={styles.statLabel}>Sold</Text>
            </View>
            <View style={[styles.statItem, styles.statItemBorder]}>
              <Text style={styles.statNumber}>{MOCK_USER.saved}</Text>
              <Text style={styles.statLabel}>Saved</Text>
            </View>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'listings' && styles.activeTab]}
            onPress={() => setActiveTab('listings')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'listings' && styles.activeTabText,
              ]}
            >
              My Listings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'saved' && styles.activeTab]}
            onPress={() => setActiveTab('saved')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'saved' && styles.activeTabText,
              ]}
            >
              Saved Items
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content Grid */}
        <View style={styles.gridContainer}>
          {activeTab === 'listings' ? (
            MY_LISTINGS.map((product) => (
              <View key={product.id} style={styles.gridItem}>
                <TouchableOpacity
                  style={styles.miniCard}
                  onPress={() => onNavigate('detail')}
                >
                  <View style={styles.miniCardImage}>
                    <Text style={styles.miniEmoji}>{product.emoji}</Text>
                  </View>
                  <View style={styles.miniCardContent}>
                    <Text style={styles.miniTitle} numberOfLines={1}>
                      {product.title}
                    </Text>
                    <Text style={styles.miniPrice}>
                      ৳{(product.price / 1000).toFixed(1)}K
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <>
              <View style={styles.gridItem}>
                <TouchableOpacity
                  style={styles.miniCard}
                  onPress={() => onNavigate('detail')}
                >
                  <View style={styles.miniCardImage}>
                    <Text style={styles.miniEmoji}>📱</Text>
                  </View>
                  <View style={styles.miniCardContent}>
                    <Text style={styles.miniTitle}>iPhone 13</Text>
                    <Text style={styles.miniPrice}>৳34K</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.gridItem}>
                <TouchableOpacity
                  style={styles.miniCard}
                  onPress={() => onNavigate('detail')}
                >
                  <View style={styles.miniCardImage}>
                    <Text style={styles.miniEmoji}>🎧</Text>
                  </View>
                  <View style={styles.miniCardContent}>
                    <Text style={styles.miniTitle}>Sony XM4</Text>
                    <Text style={styles.miniPrice}>৳8.5K</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.gridItem}>
                <TouchableOpacity
                  style={styles.miniCard}
                  onPress={() => onNavigate('detail')}
                >
                  <View style={styles.miniCardImage}>
                    <Text style={styles.miniEmoji}>📚</Text>
                  </View>
                  <View style={styles.miniCardContent}>
                    <Text style={styles.miniTitle}>Engg. Math</Text>
                    <Text style={styles.miniPrice}>৳580</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      <BottomTabNav activeTab="profile" onTabPress={(tab) => onTabPress(tab)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  scrollView: {
    flex: 1,
  },
  headerBackground: {
    backgroundColor: Colors.primary,
    backgroundImage: 'linear-gradient(160deg, #41aeb0 0%, #3761bc 50%, #16a390 100%)',
  },
  headerContent: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary_dark,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(171, 52, 120, 0.4)',
  },
  avatarText: {
    color: 'contrast',
    fontSize: 20,
    fontWeight: '800',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
  },
  userDeptSmall: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.75)',
    marginTop: 2,
  },
  userLocation: {
    fontSize: 10,
    color: 'rgb(29, 26, 26)',
    marginTop: 2,
  },
  editButton: {
    backgroundColor: '#54B3DD',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  statItemBorder: {
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255, 255, 255, 0.2)',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  statLabel: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
  },
  tab: {
    flex: 1,
    paddingVertical: 9,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text_muted,
  },
  activeTabText: {
    color: Colors.primary,
    fontWeight: '700',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: Colors.bg,
    gap: 25,
  },
  gridItem: {
    width: `${100 / 3}%`,
    paddingHorizontal: 0,
  },
  miniCard: {
    backgroundColor: Colors.surface,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  miniCardImage: {
    height: 70,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniEmoji: {
    fontSize: 20,
  },
  miniCardContent: {
    padding: 6,
  },
  miniTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.text_main,
    marginBottom: 2,
  },
  miniPrice: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.primary,
  },
});
