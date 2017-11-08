import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Home extends Component {

  goLogin(){
    Actions.login();
	}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.goLogin()}>
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <Image style={styles.image} source={require('../assets/images.jpg')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'deepskyblue',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'deepskyblue',
  },
  image: {
    width: 100,
    height: 100
  }
})

export default Home
