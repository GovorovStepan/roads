import { useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppContext } from '../context/AppContext';
import { TextInput, Button, Surface } from 'react-native-paper';

export default function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: 'SET_HEADER',
      payload: 'Sign Up',
    });
  }, []);

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
      body: JSON.stringify({ 'login': login, 'password': password }),
    });
    const data = await response.json();
    dispatch({
      type: 'TOOGLE_INDICATOR',
    });
    console.log(data, response.ok);
  }
  return (
      <Surface style={styles.container}>
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
          secureTextEntry
          inputMode='text'
        />
        <Button mode="contained" onPress={() => confirmForm()} style={styles.button}>
          Confirm
        </Button>
      </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
  input: {
    width: '100%',
    marginVertical: 8,
  },
  button: {
    marginTop: 16,
  },
});
