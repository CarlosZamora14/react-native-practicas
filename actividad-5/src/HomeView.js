import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Components
import ArtistList from './ArtistList.js';

// Api
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
        {artists && <ArtistList artists={artists} />}
        <StatusBar style="auto" />
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