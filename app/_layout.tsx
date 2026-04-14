import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import MainApp from './index';

export default function RootLayout() {
  return (
    <>
      <MainApp />
      <StatusBar style="dark" />
    </>
  );
}
