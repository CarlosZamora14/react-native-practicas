import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ArtistList from './ArtistList.js';
import { getMusicData } from './api-client.js';

export default class HomeView extends Component {
  state = {
    artists: null
  };

  componentDidMount() {
    getMusicData().then(data => this.setState({ artists: data }));
  }

  render() {
    const artists = this.state.artists;
    return (
      <View style={styles.container}>
        {artists && <ArtistList artists={artists} navigation={this.props.navigation} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  }
});