import { useContext, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AppContext);
  function confirmForm() {
    console.log(username, email, password);
    dispatch({
      type: 'TOOGLE_INDICATOR',
    });
  }
  return (
    <View style={styles.main}>
      <Text style={styles.titleText}> Easy-Roads</Text>
      <Text style={styles.titleText}> Sing Up </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder='username'
          inputMode='text'
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='email'
          keyboardType='email-address'
          inputMode='email'
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='password'
          inputMode='text'
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            confirmForm();
          }}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    padding: 40,
    flex: 1,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#00a400',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: '80%',
    padding: 10,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
