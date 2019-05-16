import React from 'react';
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

type propsTypes = {
  placeholder: string,
  value: string,
  onChange: Function,
  onSubmit: Function,
  buttonTitle: string
};

const Input = (props: propsTypes) => {
  const {
    placeholder, value, onChange, onSubmit, buttonTitle
  } = props;
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
};

export default Input;
