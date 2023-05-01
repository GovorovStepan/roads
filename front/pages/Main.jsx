import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainMap from '../components/MainMap';



export default function Main() {
  return (
    <View style={styles.container}>
      <MainMap/>
      <StatusBar style='auto' />
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
