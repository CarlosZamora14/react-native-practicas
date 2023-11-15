import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds
    };
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  };

  componentDidMount() {
    this.updateDataSource(this.props.artists);
  }

  componentWillReceiveProps(newProps) {
    if (hewProps.artists !== this.props.artists) {
      this.updateDataSource(newProps.artists);
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  };

  handlePress(artist) { }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(artist) => {
          return (
            <TouchableOpacity onPress={() => this.handlePress(artist)}>
              <ArtistBox artist={artist} />
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}