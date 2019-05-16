/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListItem from './src/components/list-item/list-item';
import Input from './src/components/input/input';

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,
//     Cmd+D or shake for dev menu'`,
//   android: `Double tap R on your keyboard to reload,
//     Shake or press menu button for dev menu`
// });

type Props = {};
type State = {
  placeName: string,
  places: Array<string>
};

export default class App extends PureComponent<Props, State> {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = (val: string) => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    const { placeName } = this.state;

    if (placeName !== '') {
      this.setState(prevState => ({
        places: [...prevState.places, placeName],
        placeName: ''
      }));
    }
  };

  render() {
    const { placeName, places } = this.state;
    // eslint-disable-next-line react/no-array-index-key
    const placeOutput = places.map((place, index) => <ListItem key={index} placeName={place} />);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> ADD LIST </Text>
        <Input
          placeholder="Add whatever you want :)"
          value={placeName}
          onChange={this.placeNameChangedHandler}
          onSubmit={this.placeSubmitHandler}
          buttonTitle="Add"
        />

        <View style={styles.listContainer}>{placeOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  listContainer: {
    width: '100%'
  }
});
