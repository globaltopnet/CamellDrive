import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors } from '../theme/color';
import TabScreenHeader from '../src/TabScreenHeader';
import SlideInScreen from '../src/SlideInScreen';

export default function MediaScreen({ navigation }) {
  return (
    <SlideInScreen>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TabScreenHeader title="미디어" navigation={navigation} />
          <View style={styles.mainContainer}>
            <Text>비어있음</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SlideInScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
