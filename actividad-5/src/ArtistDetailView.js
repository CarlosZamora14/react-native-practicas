import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import { getArtistData } from './api-client.js';

export default class ArtistDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mbid: '',
      image: '',
      streamable: '',
      listeners: '',
    };
  }

  componentDidMount() {
    getArtistData(this.props.artistId).then(artistDetails => this.setState(artistDetails));
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, padding: 24, rowGap: 12 }}>
        <Text>Nombre: {this.state.name}</Text>
        <Text>MBID: {this.state.mbid}</Text>
        <Text>Listeners: {this.state.listeners}</Text>
        <Text>Streamable: {this.state.streamable}</Text>
        {
          this.state.image !== '' ?
            <View>
              <Image style={styles.image} source={{ uri: this.state.image }} />
            </View> :
            <Text>No hay imagen :'(</Text>
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333',
  }
});