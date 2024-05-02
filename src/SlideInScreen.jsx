import React, { useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function SlideInScreen({ children }) {
  const opacity = useRef(new Animated.Value(0)).current; // 초기 투명도는 0

  useFocusEffect(
    React.useCallback(() => {
      // 화면에 포커스가 주어지면 페이드 인
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();

      return () => {
        // 화면에서 포커스를 잃으면 페이드 아웃, 완료 후에 사라짐
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }).start();
      };
    }, [])
  );

  return (
    <Animated.View style={[styles.fullscreen, { opacity }]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

export default SlideInScreen;
