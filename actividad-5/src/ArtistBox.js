import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { getArtistImage } from './api-client.js';

export default class ArtistBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  componentDidMount() {
    const { name } = this.props.artist;
    getArtistImage(name).then(image => this.setState({ image: image }));
  }

  render() {
    const { name, image } = this.props.artist;

    return (
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{ uri: this.state.image ?? image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
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