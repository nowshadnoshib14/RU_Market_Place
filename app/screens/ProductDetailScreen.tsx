import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Colors } from '@/constants/colors';
import { PrimaryButton, SecondaryButton } from '@/components/buttons';
import { BottomTabNav } from '@/components/BottomTabNav';
import { Feather } from '@expo/vector-icons';

export interface ProductDetailScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'detail' | 'profile' | 'add' | 'login') => void;
  onTabPress: (tab: 'home' | 'search' | 'post' | 'messages' | 'profile') => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  onNavigate,
  onTabPress,
}) => {
  const [liked, setLiked] = useState(false);

  const product = {
    id: '1',
    title: 'MacBook Air M1',
    price: 42000,
    category: 'Electronics',
    location: 'Hall Road, RU',
    emoji: '💻',
    description:
      'Excellent condition MacBook Air with Apple M1 chip. Bought in 2022. Battery health 92%. Minor cosmetic scratches on the lid only. Comes with original charger and box. Running macOS Ventura. Perfect for students!',
    posted_at: '2 hours ago',
  };

  const seller = {
    name: 'Rafsan Khan',
    avatar: 'RK',
    department: 'CSE Dept, RU',
    rating: 4.2,
    reviews: 12,
    listings: 8,
  };

  return (
    <View style={styles.container}>
      {/* Header with image and back/like buttons */}
      <View style={styles.headerImage}>
        <Text style={styles.emoji}>{product.emoji}</Text>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => onNavigate('home')}
        >
          <Feather name="chevron-left" size={16} color="white" />
        </TouchableOpacity>

        {/* Like Button */}
        <TouchableOpacity
          style={[styles.headerButton, styles.likeButton]}
          onPress={() => setLiked(!liked)}
        >
          <Feather
            name={liked ? 'heart' : 'heart'}
            size={15}
            color={liked ? Colors.danger : 'white'}
            fill={liked ? Colors.danger : 'none'}
          />
        </TouchableOpacity>

        {/* Carousel Indicators */}
        <View style={styles.indicators}>
          <View style={styles.indicatorActive} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView} bounces={false}>
        {/* Title and badge */}
        <View style={styles.titleContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{product.title}</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{product.category}</Text>
          </View>
        </View>

        <Text style={styles.price}>৳{product.price.toLocaleString()}</Text>

        {/* Location and time */}
        <View style={styles.metaInfo}>
          <View style={styles.metaItem}>
            <Feather name="map-pin" size={12} color={Colors.text_muted} />
            <Text style={styles.metaText}>{product.location}</Text>
          </View>
          <View style={styles.metaItem}>
            <Feather name="clock" size={12} color={Colors.text_muted} />
            <Text style={styles.metaText}>{product.posted_at}</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        {/* Seller Info */}
        <View style={styles.sellerCard}>
          <Text style={styles.sellerTitle}>Seller Info</Text>
          <View style={styles.sellerContent}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{seller.avatar}</Text>
            </View>
            <View style={styles.sellerDetails}>
              <Text style={styles.sellerName}>{seller.name}</Text>
              <Text style={styles.sellerDept}>{seller.department}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.stars}>★★★★</Text>
                <Text style={styles.emptyStars}>★</Text>
                <Text style={styles.ratingText}>
                  {seller.rating} ({seller.reviews} reviews)
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageButtonText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <SecondaryButton
          label="Save"
          onPress={() => console.log('Saved')}
          style={{ marginRight: 8 }}
        />
        <PrimaryButton
          label="Contact Seller"
          onPress={() => console.log('Contact')}
          style={{ marginLeft: 8 }}
        />
      </View>

      <BottomTabNav activeTab="home" onTabPress={(tab) => onTabPress(tab)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  headerImage: {
    height: 200,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
  },
  emoji: {
    fontSize: 72,
  },
  headerButton: {
    position: 'absolute',
    top: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButton: {
    right: 12,
  },
  indicators: {
    position: 'absolute',
    bottom: 12,
    flexDirection: 'row',
    gap: 5,
  },
  indicatorActive: {
    width: 20,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 2,
  },
  indicator: {
    width: 8,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 2,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text_main,
    marginRight: 8,
  },
  badge: {
    backgroundColor: Colors.primary_mid,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 3,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.primary,
  },
  price: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.primary,
    marginBottom: 10,
  },
  metaInfo: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    color: Colors.text_muted,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: Colors.text_main,
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: Colors.text_sub,
    lineHeight: 18,
  },
  sellerCard: {
    backgroundColor: Colors.primary_light,
    borderRadius: 14,
    padding: 13,
    borderWidth: 1,
    borderColor: Colors.primary_mid,
    marginBottom: 8,
  },
  sellerTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: Colors.text_main,
    marginBottom: 10,
  },
  sellerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  avatarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  sellerDetails: {
    flex: 1,
  },
  sellerName: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text_main,
  },
  sellerDept: {
    fontSize: 11,
    color: Colors.text_muted,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    gap: 2,
  },
  stars: {
    color: Colors.warning,
    fontSize: 11,
  },
  emptyStars: {
    color: '#D1D5DB',
    fontSize: 11,
  },
  ratingText: {
    fontSize: 10,
    color: Colors.text_muted,
    marginLeft: 2,
  },
  messageButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },
  messageButtonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },
  actionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: 8,
  },
});
