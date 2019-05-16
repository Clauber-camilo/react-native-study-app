import React, { PureComponent } from 'react';
import {
  View, TextInput, Button, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

type Props = {
  placeholder: string,
  value: string,
  onChange: Function,
  onSubmit: Function,
  buttonTitle: string
};

class Input extends PureComponent<Props> {
  render() {
    const {
      placeholder, value, onChange, onSubmit, buttonTitle
    } = this.props;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />

        <View style={styles.placeButton}>
          <Button title={buttonTitle} onPress={onSubmit} />
        </View>
      </View>
    );
  }
}

export default Input;
