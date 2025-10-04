import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuantumButton from './components/QuantumButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo!</Text>
      <StatusBar style="auto" />
      <QuantumButton
        text="Teste"
        leftIcon="Camera"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
