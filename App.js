import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Tabs from './components/Tabs';
import TabContextProvider from './context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#128C7E' />
      <TabContextProvider>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
        <Tabs />
      </TabContextProvider>
    </SafeAreaProvider>
    
  );
}
