import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/color';
import { Keyboard, TouchableWithoutFeedback, navigation } from 'react-native';
import SlideInScreen from '../src/SlideInScreen';
import TabScreenHeader from '../src/TabScreenHeader';  // 경로 확인 필요

export default function FileScreen() {
  return (
    <SlideInScreen>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TabScreenHeader title="파일" navigation={navigation} />
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
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});