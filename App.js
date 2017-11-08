import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Button,
  Text,
} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: '',
      UserPassword: '',
    };
  }

  UserRegistrationFunction = () => {
    const { UserName } = this.state;
    const { UserPassword } = this.state;

    if (UserName === '' || UserPassword === '') {
      Alert.alert('usuário ou senha em branco');
      return;
    }

    if (UserPassword.length < 6) {
      Alert.alert('senha deve ter pelo menos 6 dígitos');
      return;
    }
	  Alert.alert('senha deve ter pelo menos 6 dígitos');
    /*fetch('https://fmsadesenvolvimentos.pe.hu/user_registration.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: UserName,
        password: UserPassword,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
      Alert.alert(responseJson);
      })
      .catch(error => {
        console.error(error);
      });*/
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textDecorationLine: 'underline' ,
            textShadowColor : '#323',
            color: '#000',
            textAlign: 'center',
            marginBottom: 55,
          }}>
          Login
        </Text>

        <TextInput
          placeholder="Usuário"
          placeholderTextColor="#2196F3"
          onChangeText={UserName => this.setState({ UserName })}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="senha"
          placeholderTextColor="#2196F3" 
          onChangeText={UserPassword => this.setState({ UserPassword })}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <Button
          title="Entrar"
          onPress={this.UserRegistrationFunction}
          color="#2196F3"
          style={styles.buttonLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#66ffc2',
  },
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
    },
  buttonLogin: {
    width: 300,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f44242',
  },
});
