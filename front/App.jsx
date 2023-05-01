import { StyleSheet, View } from 'react-native';
import Register from './pages/Register';
import React from 'react';
import { AppProvider } from './context/AppContext';
import Wrapper from './components/Wrapper';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Wrapper>
          <Register />
        </Wrapper>
        <StatusBar style='auto' />
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    justifyContent: 'center',
  },
  indicator: {},
});
