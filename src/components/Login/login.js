import React from 'react';
import { Actions } from 'react-native-router-flux'
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Button,
  Text,
} from 'react-native';

const login =  (props) => {
 
 const { 
  isNotLoggedIn,
  loginToken,
  loginAsync  } = props;
   
   let loginObject = {
   user: '',
   password: ''
}

const onUserChangeText = (text) => {
   loginObject.user = text;
 }
 
 const onPasswordChangeText = (text) => {
   loginObject.password = text;
 }
 
 const submitLogin = (obj) => {
	 if (obj.user === '' || obj.password === '') {
      Alert.alert('usuário ou senha em branco');
      return;
    }

    if (obj.password.length < 6) {
      Alert.alert('senha deve ter pelo menos 6 dígitos');
      return;
    }
  loginAsync(obj).then((response) => {
  console.log(response.loginToken)
	  if(response.loginToken === 'valid'){
		Alert.alert('login efetuado com sucesso');  
		Actions.home();
	  }else{
		Alert.alert('Erro de login');    
	  }
	})
  }

   
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
          onChangeText={(text) => onUserChangeText(text)}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="senha"
          placeholderTextColor="#2196F3" 
          onChangeText={(text) => onPasswordChangeText(text)}
		  maxLength={6}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <Button
          title="Entrar"
          onPress={()=>submitLogin(loginObject)}
          color="#2196F3"
          style={styles.buttonLogin}
        />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: 'white',
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
export default login