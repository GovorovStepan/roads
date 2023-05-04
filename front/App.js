import { StyleSheet, View } from 'react-native';
import Register from './pages/Register';
import React from 'react';
import { AppProvider } from './context/AppContext';
import Wrapper from './components/Wrapper';
import { StatusBar } from 'expo-status-bar';
import { MD3DarkTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <AppProvider>
      <PaperProvider theme={DefaultTheme}>
        <View style={styles.container}>
          <Wrapper>
            <Register />
          </Wrapper>
          <StatusBar style='auto' />
        </View>
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
