// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './app/screens/HomeScreen'; // Upewnij się, że ścieżka do HomeScreen jest poprawna

export default function App() {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
}
