import { StyleSheet, View } from 'react-native';
import Register from './pages/Register';
import React from 'react';
import { AppProvider } from './context/AppContext';
import Wrapper from './components/Wrapper';
import { StatusBar } from 'expo-status-bar';
import { MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AppProvider>
      <PaperProvider theme={MD3DarkTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Wrapper>
              <Register />
            </Wrapper>
            <StatusBar style='auto' />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
});
