import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Tabs from './components/Tabs';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#128C7E' />
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <Tabs />
    </SafeAreaProvider>
    
  );
}
