import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Switch,
} from 'react-native';
import { Colors } from '@/constants/colors';
import { SearchBox } from '@/components/inputs';
import { Chip } from '@/components/Chip';
import { ProductCard } from '@/components/ProductCard';
import { BottomTabNav } from '@/components/BottomTabNav';
import { Product, CategoryType } from '@/types';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 34) / 2;

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'MacBook Air M1',
    price: 42000,
    category: 'Electronics',
    location: 'Hall Road, RU',
    emoji: '💻',
    description: '',
    posted_at: '',
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
    id: '4',
    title: 'iPhone 13 Pro',
    price: 34000,
    category: 'Gadgets',
    location: 'South Hostel',
    emoji: '📱',
    description: '',
    posted_at: '',
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
    title: 'Sony XM4',
    price: 8500,
    category: 'Electronics',
    location: 'Library Gate',
    emoji: '🎧',
    description: '',
    posted_at: '',
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
    id: '2',
    title: 'Math Textbook Set',
    price: 580,
    category: 'Books',
    location: 'Campus Area',
    emoji: '📚',
    description: '',
    posted_at: '',
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
];

export interface SearchScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'detail' | 'profile' | 'add' | 'login') => void;
  onTabPress: (tab: 'home' | 'search' | 'post' | 'messages' | 'profile') => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
  onNavigate,
  onTabPress,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(15000);

  const categories: CategoryType[] = ['All', 'Electronics', 'Books', 'Furniture', 'Gadgets', 'Others'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Browse & Search</Text>

        {/* Search Input */}
        <View style={styles.searchRow}>
          <SearchBox
            placeholder="What are you looking for?"
            editable={true}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilters(!showFilters)}
          >
            <Feather name="sliders" size={15} color="white" />
          </TouchableOpacity>
        </View>

        {/* Category Chips */}
        <View style={styles.chipsScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
      </View>

      {/* Filter Panel */}
      {showFilters && (
        <View style={styles.filterPanel}>
          <Text style={styles.filterTitle}>Filter Options</Text>
          
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Price Range</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceValue}>
                ৳{priceRange.toLocaleString()}
              </Text>
            </View>
          </View>

          <View style={styles.selectsContainer}>
            <View style={styles.selectWrapper}>
              <Text style={styles.filterLabel}>Category</Text>
              {/* Placeholder for select */}
            </View>
            <View style={styles.selectWrapper}>
              <Text style={styles.filterLabel}>Location</Text>
              {/* Placeholder for select */}
            </View>
          </View>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => setShowFilters(false)}
          >
            <Text style={styles.applyButtonText}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Results */}
      <ScrollView style={styles.scrollView} bounces={false}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultCount}>148 results found</Text>
          <Text style={styles.sortLabel}>Sort: Newest</Text>
        </View>

        <View style={styles.productsGrid}>
          {MOCK_PRODUCTS.map((product) => (
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

      <BottomTabNav activeTab="search" onTabPress={(tab) => onTabPress(tab)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  header: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 16,
    paddingTop: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.text_main,
    marginBottom: 10,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipsScroll: {
    marginBottom: 10,
  },
  filterPanel: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  filterTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text_main,
    marginBottom: 10,
  },
  filterSection: {
    marginBottom: 10,
  },
  filterLabel: {
    fontSize: 11,
    color: Colors.text_muted,
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceValue: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primary,
  },
  selectsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  selectWrapper: {
    flex: 1,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 9,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  scrollView: {
    flex: 1,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 14,
    marginBottom: 12,
  },
  resultCount: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text_main,
  },
  sortLabel: {
    fontSize: 11,
    color: Colors.primary,
    fontWeight: '600',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    gap: 11,
  },
});
