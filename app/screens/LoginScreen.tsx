import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Colors } from '@/constants/colors';
import { PrimaryButton } from '@/components/buttons';
import { BottomTabNav } from '@/components/BottomTabNav';
import { Feather } from '@expo/vector-icons';

export interface LoginScreenProps {
  onNavigate: (screen: 'home' | 'search' | 'detail' | 'profile' | 'add' | 'login') => void;
  onTabPress: (tab: 'home' | 'search' | 'post' | 'messages' | 'profile') => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onNavigate,
  onTabPress,
}) => {
  const [email, setEmail] = useState('nowshadnoshib@ru.ac.bd');
  const [password, setPassword] = useState('••••••••');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        bounces={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.headerSection}>
          <Image
            source={require('../../assets/images/cover.jpg')}
            style={styles.headerBackgroundImage}
          />
          <View style={styles.headerOverlay}>
            <Text style={styles.headerTitle}>RU Marketplace</Text>
            <Text style={styles.headerSubtitle}>
              Buy & sell within Rajshahi University
            </Text>

            {/* Diagram SVG equivalent in simple view */}
            <View style={styles.diagram}>
              <View style={styles.diagramBox}>
                <Text style={styles.diagramLabel}>Seller</Text>
              </View>
              <View style={styles.diagramArrow} />
              <View style={[styles.diagramBox, styles.diagramCenter]}>
                <Text style={styles.diagramCenterLabel}>RU MKT</Text>
                <Text style={styles.diagramCenterSub}>Marketplace</Text>
              </View>
              <View style={styles.diagramArrow} />
              <View style={styles.diagramBox}>
                <Text style={styles.diagramLabel}>Buyer</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Form Area */}
        <View style={styles.formSection}>
          <Text style={styles.formTitle}>Welcome back!</Text>
          <Text style={styles.formSubtitle}>Sign in to your RU account</Text>

          {/* Email Input */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>University Email</Text>
            <TextInput
              style={styles.input}
              placeholder="yourname@ru.ac.bd"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={Colors.text_muted}
            />
          </View>

          {/* Password Input */}
          <View style={styles.fieldContainer}>
            <View style={styles.passwordLabelContainer}>
              <Text style={styles.label}>Password</Text>
              <TouchableOpacity onPress={() => console.log('Forgot password')}>
                <Text style={styles.forgotLink}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholderTextColor={Colors.text_muted}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Text style={styles.eyeText}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Remember Me */}
          <View style={styles.rememberContainer}>
            <TouchableOpacity
              style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
              onPress={() => setRememberMe(!rememberMe)}
            >
              {rememberMe && <Feather name="check" size={10} color="white" />}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember me</Text>
          </View>

          {/* Sign In Button */}
          <View style={styles.buttonContainer}>
            <PrimaryButton
              label="Sign In"
              onPress={() => {
                onNavigate('home');
              }}
            />
          </View>

          {/* Sign Up Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>New here? </Text>
            <TouchableOpacity onPress={() => console.log('Sign up')}>
              <Text style={styles.signupLink}>Create account</Text>
            </TouchableOpacity>
          </View>

          {/* Guest Browse */}
          <View style={styles.guestContainer}>
            <TouchableOpacity onPress={() => onNavigate('home')}>
              <Text style={styles.guestLink}>Browse as Guest</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  scrollContent: {
    flexGrow: 1,
  },
  headerSection: {
    backgroundColor: Colors.primary,
    minHeight: 340,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  headerBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 34,
    alignItems: 'center',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  diagram: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
  diagramBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    minWidth: 50,
    alignItems: 'center',
  },
  diagramCenter: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  diagramLabel: {
    fontSize: 9,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  diagramCenterLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  diagramCenterSub: {
    fontSize: 8,
    color: 'rgba(255, 255, 255, 0.95)',
    textAlign: 'center',
    marginTop: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  diagramArrow: {
    width: 8,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  formSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 10,
    backgroundColor: Colors.bg,
    flex: 1,
    justifyContent: 'flex-start',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.text_main,
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 12,
    color: Colors.text_muted,
    marginBottom: 22,
  },
  fieldContainer: {
    marginBottom: 14,
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
  passwordLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  forgotLink: {
    fontSize: 11,
    color: Colors.primary,
    fontWeight: '600',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 10,
    backgroundColor: Colors.surface,
    paddingHorizontal: 13,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 13,
    color: Colors.text_main,
  },
  eyeIcon: {
    paddingHorizontal: 8,
  },
  eyeText: {
    fontSize: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 7,
  },
  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  rememberText: {
    fontSize: 12,
    color: Colors.text_sub,
  },
  buttonContainer: {
    marginBottom: 18,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 6,
  },
  signupText: {
    fontSize: 12,
    color: Colors.text_muted,
  },
  signupLink: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '700',
  },
  guestContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  guestLink: {
    fontSize: 12,
    color: Colors.text_muted,
    textDecorationLine: 'underline',
  },
});
