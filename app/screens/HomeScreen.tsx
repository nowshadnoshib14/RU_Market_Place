import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Colors } from '@/constants/colors';
import { Typography } from '@/constants/typography';
import { AppBar } from '@/components/AppBar';
import { SearchBox } from '@/components/inputs';
import { Chip } from '@/components/Chip';
import { ProductCard } from '@/components/ProductCard';
import { BottomTabNav } from '@/components/BottomTabNav';
import { Product, CategoryType } from '@/types';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 columns with padding

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'MacBook Air M1',
    price: 42000,
    category: 'Electronics',
    location: 'Hall Road, RU',
    emoji: '💻',
    description: 'Excellent condition, bought 1 year ago.',
    posted_at: '2 hours ago',
    seller: {
      id: 's1',
      name: 'Rafsan Khan',
      avatar: 'RK',
      department: 'CSE',
      rating: 4.2,
      reviews: 12,
      listings: 8,
    },
  },
  {
    id: '2',
    title: 'Engg. Math Set',
    price: 580,
    category: 'Books',
    location: 'Campus Area',
    emoji: '📚',
    description: 'Complete engineering math textbooks.',
    posted_at: '3 hours ago',
    seller: {
      id: 's2',
      name: 'Ahmed Rafi',
      avatar: 'AR',
      department: 'EEE',
      rating: 4.5,
      reviews: 8,
      listings: 5,
    },
  },
  {
    id: '3',
    title: 'Study Chair (Mesh)',
    price: 2200,
    category: 'Furniture',
    location: 'North Campus',
    emoji: '🪑',
    description: 'Comfortable mesh study chair.',
    posted_at: '5 hours ago',
    seller: {
      id: 's3',
      name: 'Mofid Ahmed',
      avatar: 'MA',
      department: 'Civil',
      rating: 4.0,
      reviews: 6,
      listings: 3,
    },
  },
  {
    id: '4',
    title: 'iPhone 13 Pro',
    price: 34000,
    category: 'Gadgets',
    location: 'South Hostel',
    emoji: '📱',
    description: 'iPhone 13 Pro in excellent condition.',
    posted_at: '1 hour ago',
    seller: {
      id: 's4',
      name: 'Fatima Khan',
      avatar: 'FK',
      department: 'CSE',
      rating: 4.8,
      reviews: 15,
      listings: 10,
    },
  },
  {
    id: '5',
    title: 'Sony WH-1000XM4',
    price: 8500,
    category: 'Electronics',
    location: 'Library Gate',
    emoji: '🎧',
    description: 'Premium noise cancelling headphones.',
    posted_at: '4 hours ago',
    seller: {
      id: 's5',
      name: 'Karim Hasan',
      avatar: 'KH',
      department: 'Management',
      rating: 4.3,
      reviews: 9,
      listings: 7,
    },
  },
  {
    id: '6',
    title: 'Organic Chemistry',
    price: 320,
    category: 'Books',
    location: 'Science Faculty',
    emoji: '📖',
    description: 'Organic chemistry textbook.',
    posted_at: '6 hours ago',
    seller: {
      id: 's6',
      name: 'Rina Dey',
      avatar: 'RD',
      department: 'Chemistry',
      rating: 4.1,
      reviews: 5,
      listings: 4,
    },
  },
];

export interface HomeScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'detail' | 'profile' | 'add' | 'login') => void;
  onTabPress: (tab: 'home' | 'search' | 'post' | 'messages' | 'profile') => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onTabPress }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

  const categories: CategoryType[] = ['All', 'Electronics', 'Books', 'Furniture', 'Gadgets', 'Others'];

  const filteredProducts =
    selectedCategory === 'All'
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <View style={styles.container}>
      <AppBar 
        showLogo 
        logoImage={require('../../assets/images/RULogo.jpg')}
        title="RU Marketplace" 
        subtitle="University Of Rajshahi" 
      />

      <ScrollView
        style={styles.scrollView}
        bounces={false}
        scrollEventThrottle={16}
      >
        {/* Search Box */}
        <View style={styles.searchContainer}>
          <SearchBox onPress={() => onNavigate('search')} />
        </View>

        {/* Category Chips */}
        <View style={styles.chipsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.chipsScroll}
          >
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                isActive={selectedCategory === cat}
                onPress={() => setSelectedCategory(cat)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Featured Banner */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerLabel}>FEATURED TODAY</Text>
          <Text style={styles.bannerTitle}>New Listings Just In</Text>
          <Text style={styles.bannerSubtitle}>
            24 new products in the last hour
          </Text>
        </View>

        {/* Recent Listings Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Listings</Text>
          <TouchableOpacity onPress={() => onNavigate('search')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Product Grid */}
        <View style={styles.productsGrid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => onNavigate('detail')}
              style={{ width: cardWidth }}
            />
          ))}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      <BottomTabNav activeTab="home" onTabPress={(tab) => onTabPress(tab)} />
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
  searchContainer: {
    paddingHorizontal: 14,
    paddingTop: 14,
  },
  chipsContainer: {
    paddingVertical: 12,
    borderBottomWidth: 0,
  },
  chipsScroll: {
    paddingHorizontal: 14,
  },
  bannerContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 14,
    marginBottom: 16,
    marginTop: 2,
  },
  bannerLabel: {
    ...Typography.captionBold,
    color: 'rgba(255, 255, 255, 0.65)',
    letterSpacing: 1.2,
    marginBottom: 5,
  },
  bannerTitle: {
    ...Typography.h5,
    color: 'white',
    marginBottom: 3,
  },
  bannerSubtitle: {
    ...Typography.bodySmall,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  sectionTitle: {
    ...Typography.h4,
    color: Colors.text_main,
  },
  seeAll: {
    ...Typography.labelSmall,
    color: Colors.primary,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    gap: 11,
  },
});
