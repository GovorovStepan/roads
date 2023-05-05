import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Appbar, ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Wrapper(props) {
  const { indicator , header} = useContext(AppContext);
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={header} />
      </Appbar.Header>
      <ActivityIndicator animating={indicator} color={MD2Colors.red800} />
      <View style={styles.container}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 16
  }

});
