import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '@/constants/colors';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  style?: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress, style }) => {
  const [liked, setLiked] = useState(product.liked || false);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      Electronics: { bg: Colors.primary_mid, text: Colors.primary },
      Books: { bg: '#FEF3C7', text: '#B45309' },
      Furniture: { bg: '#D1FAE5', text: '#065F46' },
      Gadgets: { bg: '#EDE9FE', text: '#6D28D9' },
      Others: { bg: Colors.primary_mid, text: Colors.primary },
    };
    return colors[category] || colors.Others;
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const categoryColor = getCategoryColor(product.category);

  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Text style={styles.emoji}>{product.emoji}</Text>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={handleLike}
          activeOpacity={0.7}
        >
          <Text style={styles.likeIcon}>{liked ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.price}>৳{product.price.toLocaleString()}</Text>
        <View style={styles.footer}>
          <Text style={styles.location}>{product.location}</Text>
          <View style={[styles.categoryTag, { backgroundColor: categoryColor.bg }]}>
            <Text style={[styles.categoryText, { color: categoryColor.text }]}>
              {product.category}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  imageContainer: {
    height: 108,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  emoji: {
    fontSize: 28,
  },
  likeButton: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeIcon: {
    fontSize: 12,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text_main,
    marginBottom: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 9,
    color: Colors.text_muted,
  },
  categoryTag: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 9,
    fontWeight: '700',
  },
});
