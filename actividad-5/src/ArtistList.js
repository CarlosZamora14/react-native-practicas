import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import ListView from 'deprecated-react-native-listview';
import { Actions } from 'react-native-router-flux';

// Components
import ArtistBox from './ArtistBox.js';

export default class ArtistList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds
    };
  }

  componentDidMount() {
    this.updateDataSource(this.props.artists);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.artists !== this.props.artists) {
      this.updateDataSource(this.props.artists);
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
  };

  handlePress(artist) {
    Actions.details({ artistId: artist.id });
  }

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