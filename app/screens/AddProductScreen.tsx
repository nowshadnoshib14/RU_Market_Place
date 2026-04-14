import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Colors } from '@/constants/colors';
import { AppBar } from '@/components/AppBar';
import { PrimaryButton } from '@/components/buttons';
import { BottomTabNav } from '@/components/BottomTabNav';
import { Feather } from '@expo/vector-icons';

export interface AddProductScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'detail' | 'profile' | 'add' | 'login') => void;
  onTabPress: (tab: 'home' | 'search' | 'post' | 'messages' | 'profile') => void;
}

export const AddProductScreen: React.FC<AddProductScreenProps> = ({
  onNavigate,
  onTabPress,
}) => {
  const [formData, setFormData] = useState({
    name: 'MacBook Air M1',
    description:
      'Excellent condition, bought 1 year ago. Battery health 92%. Minor cosmetic scratches. Original box included.',
    category: 'Electronics',
    price: '42000',
    location: 'Hall Road, RU',
  });

  const categories = ['Electronics', 'Books', 'Furniture', 'Gadgets', 'Others'];

  return (
    <View style={styles.container}>
      <AppBar
        onBackPress={() => onNavigate('home')}
        title="Add Product"
        subtitle=""
      />

      <ScrollView style={styles.scrollView} bounces={false}>
        {/* Photo Upload Area */}
        <View style={styles.photoSection}>
          <TouchableOpacity style={styles.uploadArea} onPress={() => console.log('Open gallery')}>
            <Text style={styles.uploadEmoji}>📷</Text>
            <Text style={styles.uploadTitle}>Upload Photos</Text>
            <Text style={styles.uploadSubtitle}>Tap to select from gallery</Text>
            <View style={styles.imagePreview}>
              <View style={styles.previewImage}>
                <Text style={styles.previewEmoji}>💻</Text>
              </View>
              <TouchableOpacity style={styles.addImageButton}>
                <Feather name="plus" size={18} color="#93C5FD" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.addImageButton}>
                <Feather name="plus" size={18} color="#93C5FD" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          {/* Product Name */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Product Name</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. MacBook Air M1 2020"
              value={formData.name}
              onChangeText={(text) =>
                setFormData({ ...formData, name: text })
              }
            />
          </View>

          {/* Description */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe your product condition, age, reason for selling..."
              multiline
              numberOfLines={3}
              value={formData.description}
              onChangeText={(text) =>
                setFormData({ ...formData, description: text })
              }
            />
          </View>

          {/* Category and Price */}
          <View style={styles.rowContainer}>
            <View style={[styles.fieldContainer, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.label}>Category</Text>
              <View style={styles.selectInput}>
                <Text style={{ fontSize: 13, color: Colors.text_main }}>
                  {formData.category}
                </Text>
              </View>
            </View>
            <View style={[styles.fieldContainer, { flex: 1, marginLeft: 10 }]}>
              <Text style={styles.label}>Price (৳)</Text>
              <TextInput
                style={styles.input}
                placeholder="0"
                value={formData.price}
                onChangeText={(text) =>
                  setFormData({ ...formData, price: text })
                }
                keyboardType="numeric"
              />
            </View>
          </View>

          {/* Location */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Hall Road, RU Campus"
              value={formData.location}
              onChangeText={(text) =>
                setFormData({ ...formData, location: text })
              }
            />
          </View>

          {/* Preview */}
          <View style={styles.previewCard}>
            <Text style={styles.previewLabel}>PREVIEW</Text>
            <View style={styles.previewContent}>
              <View style={styles.previewImageLarge}>
                <Text style={styles.previewEmojiLarge}>💻</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.previewTitle}>{formData.name}</Text>
                <Text style={styles.previewPrice}>
                  ৳{parseInt(formData.price).toLocaleString()}
                </Text>
                <Text style={styles.previewLocation}>{formData.location}</Text>
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <PrimaryButton
            label="Post Product"
            onPress={() => console.log('Post product')}
          />

          <View style={{ height: 12 }} />
        </View>
      </ScrollView>

      <BottomTabNav activeTab="post" onTabPress={(tab) => onTabPress(tab)} />
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
  photoSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  uploadArea: {
    backgroundColor: Colors.primary_light,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#93C5FD',
    borderRadius: 14,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  uploadEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  uploadTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 3,
  },
  uploadSubtitle: {
    fontSize: 11,
    color: Colors.text_muted,
    marginBottom: 12,
  },
  imagePreview: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    width: '100%',
  },
  previewImage: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewEmoji: {
    fontSize: 20,
  },
  addImageButton: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary_mid,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#93C5FD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formSection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  fieldContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text_main,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 10,
    fontSize: 13,
    color: Colors.text_main,
    backgroundColor: Colors.surface,
  },
  textArea: {
    paddingVertical: 12,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 0,
  },
  selectInput: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: Colors.surface,
    justifyContent: 'center',
  },
  previewCard: {
    backgroundColor: Colors.primary_light,
    borderRadius: 14,
    padding: 13,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.primary_mid,
  },
  previewLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  previewContent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  previewImageLarge: {
    width: 56,
    height: 56,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewEmojiLarge: {
    fontSize: 24,
  },
  previewTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.text_main,
  },
  previewPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.primary,
  },
  previewLocation: {
    fontSize: 10,
    color: Colors.text_muted,
    marginTop: 2,
  },
});
