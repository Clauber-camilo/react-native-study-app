import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../list-item';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

type Props = {
  items: Array<string>
};

class List extends PureComponent<Props> {
  render() {
    const { items } = this.props;

    // eslint-disable-next-line react/no-array-index-key
    const item = items.map((place, index) => <ListItem key={index} placeName={place} />);

    return <View style={styles.listContainer}>{item}</View>;
  }
}

export default List;
