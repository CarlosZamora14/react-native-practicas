import { Component } from 'react';
import LoginView from './src/LoginView';
import { Actions, Scene, Router } from 'react-native-router-flux';
import RegisterView from './src/RegisterView';

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="login"
      component={LoginView}
      hideNavBar
    />
    <Scene
      back={true}
      key="register"
      component={RegisterView}
      title="Register"
    />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}
