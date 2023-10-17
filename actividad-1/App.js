import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      textValue: ''
    };
  }

  onChange = (value) => {
    console.warn(`El switch cambiará a ${value}`);
    this.setState({ switchValue: value });
  };

  onChangeInput = (text) => {
    this.setState({ textValue: text });
  };

  onPressLearnMore = () => {
    console.warn('Presionaste un butón');
    Alert.alert('Carlos Zamora', this.state.textValue);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <TextInput
          onChangeText={text => this.onChangeInput(text)}
          value={this.state.textValue}
          placeholder="Escribe algo"
        />

        <Switch
          onChange={() => this.onChange(!this.state.switchValue)}
          value={this.state.switchValue}
        />

        <Text>Hello world</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
