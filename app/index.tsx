import React, { useState } from 'react';
import { View } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { SearchScreen } from './screens/SearchScreen';
import { AddProductScreen } from './screens/AddProductScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { LoginScreen } from './screens/LoginScreen';

type Screen = 'home' | 'search' | 'detail' | 'profile' | 'add' | 'login';

export default function MainApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleTabPress = (tab: string) => {
    switch (tab) {
      case 'home':
        setCurrentScreen('home');
        break;
      case 'search':
        setCurrentScreen('search');
        break;
      case 'post':
        setCurrentScreen('add');
        break;
      case 'profile':
        setCurrentScreen('profile');
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={handleNavigate} onTabPress={handleTabPress} />
      )}
      {currentScreen === 'search' && (
        <SearchScreen
          onNavigate={handleNavigate}
          onTabPress={handleTabPress}
        />
      )}
      {currentScreen === 'add' && (
        <AddProductScreen
          onNavigate={handleNavigate}
          onTabPress={handleTabPress}
        />
      )}
      {currentScreen === 'detail' && (
        <ProductDetailScreen
          onNavigate={handleNavigate}
          onTabPress={handleTabPress}
        />
      )}
      {currentScreen === 'profile' && (
        <ProfileScreen onNavigate={handleNavigate} onTabPress={handleTabPress} />
      )}
      {currentScreen === 'login' && (
        <LoginScreen onNavigate={handleNavigate} onTabPress={handleTabPress} />
      )}
    </View>
  );
}
