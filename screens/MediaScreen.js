import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function FileScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>File Screen</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFBFC',
  }
});
