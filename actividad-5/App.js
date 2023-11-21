import { Component } from 'react';
import LoginView from './src/LoginView';
import { Actions, Scene, Router } from 'react-native-router-flux';
import RegisterView from './src/RegisterView.js';
import HomeView from './src/HomeView.js';
import ArtistDetailView from '../actividad-5/src/ArtistDetailView.js';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="login"
      component={LoginView}
      hideNavBar
    />
    <Scene
      key="home"
      component={HomeView}
      title="Home"
      back={true}
    />
    <Scene
      back={true}
      key="register"
      component={RegisterView}
      title="Register"
    />
    <Scene
      back={true}
      key="details"
      component={ArtistDetailView}
      title="Artist details"
    />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}
