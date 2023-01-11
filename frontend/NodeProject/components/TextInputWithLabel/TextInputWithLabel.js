import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const TextInputWithLabel = ({value, onChangeText, label}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textSize, styles.label]}>{label}</Text>
      <TextInput
        style={[styles.textInput, styles.textSize]}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default TextInputWithLabel;
