import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChangeEmail = (value) => {
    this.setState({ email: value });
  };

  onChangePassword = (value) => {
    this.setState({ password: value });
  };

  validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim() === '') {
      return 'El campo de correo electrónico no puede estar vacío.';
    } else if (!emailRegex.test(email)) {
      return 'Correo electrónico inválido.';
    }

    return null;
  }

  validatePassword(password) {
    const uppercaseRegex = /[A-Z]/; // Matches any uppercase letter
    const lowercaseRegex = /[a-z]/; // Matches any lowercase letter
    const specialCharacterRegex = /[\W_]/; // Matches any character that is not alphanumeric

    if (password === '') {
      return 'El campo de la contraseña no puede estar vacio.';
    } else if (password.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres.';
    } else if (!uppercaseRegex.test(password)) {
      return 'La contraseña debe tener al menos 1 mayúscula.';
    } else if (!lowercaseRegex.test(password)) {
      return 'La contraseña debe tener al menos 1 minúscula';
    } else if (!specialCharacterRegex.test(password)) {
      return 'La contraseña debe tener al menos 1 carácter especial';
    }

    return null;
  }

  handleOnPress = () => {
    let errors = '';

    const emailErrorMessage = this.validateEmail(this.state.email);
    if (emailErrorMessage) {
      errors += emailErrorMessage + '\n';
    }

    const passwordErrorMessage = this.validatePassword(this.state.password);
    if (passwordErrorMessage) {
      errors += passwordErrorMessage + '\n';
    }

    if (emailErrorMessage || passwordErrorMessage) {
      Alert.alert('Login inválido', errors);
    } else {
      Actions.home();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/img.jpg')} style={styles.img} />

        <TextInput
          onChangeText={text => this.onChangeEmail(text)}
          value={this.state.email}
          placeholder="Escribe tu correo"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput
          onChangeText={text => this.onChangePassword(text)}
          value={this.state.password}
          secureTextEntry={true}
          placeholder="Escribe tu contraseña"
          style={styles.input}
        />

        <Button
          onPress={this.handleOnPress}
          title="Enviar"
          color="#E240A2"
          accessibilityLabel="Iniciar sesión"
        />

        <Button
          onPress={() => Actions.register()}
          title="Register"
          color="#841584"
          accessibilityLabel="Crea una cuenta"
        />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
  img: {
    width: '80%',
    height: '25%',
    objectFit: 'cover',
    marginBottom: 32,
  },
  input: {
    width: '80%',
    backgroundColor: '#E9FFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  }
});
