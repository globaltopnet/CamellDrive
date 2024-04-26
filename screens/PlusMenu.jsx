import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Animated, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Colors } from '../theme/color';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;
    
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true
    }).start();

    setIsOpen(!isOpen);
  };

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"]  // 플러스 아이콘의 약간의 회전
  });

  // 이 각도를 조절하여 아이템의 확산을 변경합니다
  const pinStyle = getStyle(245);
  const thumbStyle = getStyle(115);
  const heartStyle = getStyle(180);

  function getStyle(degrees) {
    const radius = 100;  // 확산 반경 조절
    const radians = degrees * Math.PI / 180;
    const x = radius * Math.sin(radians);
    const y = radius * Math.cos(radians);

    return {
      transform: [
        { scale: animation },
        { translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [0, x] }) },
        { translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [0, y] }) }
      ]
    };
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={[styles.button, { transform: [{ rotate: rotation }] }]}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      
      <Item 
        style={heartStyle}
        icon={<Foundation name="folder-add" size={35} color="white" />}
        label="폴더 생성"
      />
      <Item 
        style={thumbStyle}
        icon={<AntDesign name="camera" size={35} color="white" />}
        label="사진 촬영"
      />
      <Item 
        style={pinStyle}
        icon={<MaterialIcons name="note-add" size={35} color="white" />}
        label="업로드"
      />
    </View>
  );
}

function Item({ style, icon, label }) {
  return (
    <Animated.View style={[styles.button, styles.secondary, style]}>
      <Text style={styles.buttonText}>{icon}</Text>
      <Text style={styles.menuLabel}>{label}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.themcolor,
    alignItems: 'center',
    justifyContent: 'center',
    top: -40,
  },
  secondary: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 45,
    marginBottom: 3,
  },
  label: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 5,
  },
  menuLabel: {
    fontSize: 9,
    color: '#fff',
  }
});
