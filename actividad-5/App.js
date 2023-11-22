import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

// Views
import LoginView from './src/LoginView.js';
import RegisterView from './src/RegisterView.js';
import HomeView from './src/HomeView.js';
import ArtistDetailView from '../actividad-5/src/ArtistDetailView.js';

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
      back={true}
    />
    <Scene
      title="Register"
      key="register"
      component={RegisterView}
      back={true}
    />
    <Scene
      title="Artist details"
      key="details"
      component={ArtistDetailView}
      back={true}
    />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}
