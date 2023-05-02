import { useContext, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function Register() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AppContext);
  async function confirmForm() {
    console.log(login, email, password);
    dispatch({
      type: 'TOOGLE_INDICATOR',
    });
    // Default options are marked with *
    const response = await fetch('http://localhost:3000/register', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({'login':login, 'password':password}),
    });
    console.log(response.json()); // parses JSON response into native JavaScript objects
  }
  return (
    <View style={styles.main}>
      <Text style={styles.titleText}> Easy-Roads</Text>
      <Text style={styles.titleText}> Sing Up </Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setLogin}
          value={login}
          placeholder='login'
          inputMode='text'
        />
        {/* <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='email'
          keyboardType='email-address'
          inputMode='email'
        /> */}
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
