import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Api
import { getArtistData, getArtistImage } from './api-client.js';

export default class ArtistDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mbid: '',
      image: '',
      streamable: '',
      listeners: '',
      playcount: '',
      tags: [{ name: 'test' }],
    };
  }

  componentDidMount() {
    getArtistData(this.props.artistId)
      .then(artistDetails => {
        this.setState(artistDetails);
        return getArtistImage(artistDetails.name, 'picture_xl');
      })
      .then(artistImage => this.setState({ image: artistImage }));
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          {
            this.state.image && (
              <View>
                <Image style={styles.image} source={{ uri: this.state.image }} />
              </View>
            )
          }
          <Text style={styles.name}>{this.state.name}</Text>
          <Text style={styles.mbid}>{this.state.mbid}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statWrapper}>
              <Text style={styles.statTitle}>Listeners</Text>
              <Text style={styles.statInfo}>{this.state.listeners}</Text>
            </View>
            <View style={styles.statWrapper}>
              <Text style={styles.statTitle}>Play count</Text>
              <Text style={styles.statInfo}>{this.state.playcount}</Text>
            </View>
            <View style={styles.statWrapper}>
              <Text style={styles.statTitle}>Streamable</Text>
              <Text style={styles.statInfo}>{this.state.streamable === '0' ? 'No' : 'Yes'}</Text>
            </View>
          </View>

          {
            this.state.tags.length > 0 && (
              <>
                <Text style={[styles.statInfo, { marginBottom: 8 }]}>Genres</Text>
                <ScrollView horizontal contentContainerStyle={{ columnGap: 8 }} showsHorizontalScrollIndicator={false} >
                  {this.state.tags.map(tag => (
                    <View style={styles.tagWrapper} key={tag.name}>
                      <Text style={styles.tag}>{tag.name[0].toUpperCase() + tag.name.substring(1)}</Text>
                    </View>
                  ))}
                </ScrollView>
              </>
            )
          }
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  name: {
    fontFamily: 'Roboto',
    fontSize: 48,
    fontWeight: '700',
    color: '#35353A',
  },
  mbid: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '300',
    color: '#696970',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
    objectFit: 'contain',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 32,
  },
  statWrapper: {
    rowGap: 2,
  },
  statTitle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    color: '#696970',
  },
  statInfo: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    color: '#35353A',
  },
  tagWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderColor: '#35353A',
    borderWidth: 1,
  },
  tag: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    color: '#35353A',
  },
});