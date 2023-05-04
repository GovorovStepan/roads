import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Wrapper(props) {
  const { indicator } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.indicator}
        size='large'
        animating={indicator}
      />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  // indicator: {
  //   top: '25%'
  // },
});
