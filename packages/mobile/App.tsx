import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useCallback, useEffect } from 'react';
import QuantumColors from './constants/colors';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontError) {
      console.error(fontError);
    }
  }, [fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Este é o Quantum Message</Text>
      <Text style={styles.text}>Uma forma simples, segura e confiável de se comunicar</Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: QuantumColors.primaryText,
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
  },
  boldText: {
    color: QuantumColors.primaryText,
    fontSize: 28,
    marginTop: 16,
    fontFamily: 'Inter_700Bold',
  },
});