import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

// Views
import LoginView from './src/LoginView.js';
import RegisterView from './src/RegisterView.js';
import HomeView from './src/HomeView.js';
import ArtistDetailView from '../actividad-5/src/ArtistDetailView.js';

const titleStyles = {
  fontFamily: 'Roboto',
  fontSize: 20,
  fontWeight: '700',
  color: '#35353A',
};

const scenes = Actions.create(
  <Scene key="root" headerLayoutPreset="center">
    <Scene
      key="login"
      component={LoginView}
      hideNavBar
    />
    <Scene
      title="Home"
      key="home"
      component={HomeView}
      titleStyle={titleStyles}
      back={true}
      backButtonTintColor="#35353A"
    />
    <Scene
      title="Register"
      key="register"
      component={RegisterView}
      titleStyle={titleStyles}
      back={true}
      backButtonTintColor="#35353A"
    />
    <Scene
      title="Artist details"
      key="details"
      component={ArtistDetailView}
      titleStyle={titleStyles}
      back={true}
      backButtonTintColor="#35353A"
    />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}