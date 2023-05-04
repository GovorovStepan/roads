import { useContext, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { AppContext } from '../context/AppContext';
import { TextInput,Button, Appbar } from 'react-native-paper';

export default function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AppContext);
  async function confirmForm() {
    console.log(login, password);
    dispatch({
      type: 'TOOGLE_INDICATOR',
    });
    const response = await fetch('http://localhost:3000/register', {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({'login':login, 'password':password}),
    });
    const data = await response.json();
    dispatch({
      type: 'TOOGLE_INDICATOR',
    });
    console.log(data, response.ok); 
  }
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Easy-Roads" />
      </Appbar.Header>
      <Text style={styles.titleText}> Sing Up </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setLogin}
          value={login}
          placeholder='login'
          inputMode='text'
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='password'
          inputMode='text'
        />
         <Button  mode="contained" onPress={() => onfirmForm()}>
         Confirm
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // button: {
  //   marginTop: 10,
  //   backgroundColor: '#00a400',
  //   borderWidth: 1,
  //   padding: 10,
  //   width: '80%',
  //   textAlign: 'center',
  // },
  // buttonText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   width: '80%',
  //   padding: 10,
  //   backgroundColor: '#fff',
  // },
  // titleText: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#fff',
  // },
});
