import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/color';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import SubTabScreenHeader from '../main/SubTabScreenHeader';

export default function DepositScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <SubTabScreenHeader title="입금" navigation={navigation} />

        <View style={styles.mainContainer}>
            <Text>비어있음</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },
  mainContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});
