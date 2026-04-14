import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Colors } from '@/constants/colors';
import { Feather } from '@expo/vector-icons';

interface SearchBoxProps {
  placeholder?: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  editable?: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Search books, gadgets, furniture...',
  onPress,
  onChangeText,
  value,
  editable = false,
}) => (
  <TouchableOpacity
    style={styles.searchContainer}
    onPress={onPress}
    disabled={editable}
    activeOpacity={editable ? 1 : 0.7}
  >
    <Feather name="search" size={14} color={Colors.text_muted} />
    {editable ? (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.text_muted}
        onChangeText={onChangeText}
        value={value}
      />
    ) : (
      <Text style={styles.placeholder}>{placeholder}</Text>
    )}
  </TouchableOpacity>
);

interface TextInputFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) => (
  <View style={styles.fieldContainer}>
    {label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={Colors.text_muted}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Colors.bg,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: Colors.text_main,
  },
  placeholder: {
    fontSize: 12,
    color: Colors.text_muted,
    flex: 1,
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
  textInput: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 10,
    fontSize: 13,
    color: Colors.text_main,
    backgroundColor: Colors.surface,
  },
});
