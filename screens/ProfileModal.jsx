import React, { useState, useEffect, useRef } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/color';

const ProfileModal = ({ visible, onClose, userData }) => {
  const slideAnim = useRef(new Animated.Value(-500)).current; // 시작 위치를 화면 위로 설정

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 230,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -500,
        duration: 500,
        useNativeDriver: true
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <Animated.View
          style={[styles.modalView, { transform: [{ translateY: slideAnim }] }]}
        >
          <View style={styles.header}>
            <View style={styles.headerTop}>
                <Ionicons name="person-circle" size={60} color="black" />
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Ionicons name="close" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.headerBottom}>
                <Text style={styles.emailText}>seokbin.cloud@gmail.com</Text>
            </View>
          </View>

          <View style={styles.body}>
              <TouchableOpacity style={styles.menu} onPress={() => console.log('프로필 사진 변경')}>
                <Ionicons name="image" size={20} color="#828282" />
                <Text style={styles.menuText}>프로필 사진 변경</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu} onPress={() => console.log('계정 설정')}>
                <Ionicons name="settings" size={20} color='#828282' />
                <Text style={styles.menuText}>계정 설정</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu} onPress={() => console.log('도움말')}>
                <Ionicons name="help-circle" size={20} color="#828282" />
                <Text style={styles.menuText}>도움말</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu} onPress={() => console.log('로그아웃')}>
                <Ionicons name="log-out" size={20} color="#828282" />
                <Text style={styles.menuText}>로그아웃</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu} onPress={() => console.log('회원 탈퇴')}>
                <Ionicons name="exit" size={20} color="#828282" />
                <Text style={styles.menuText}>회원 탈퇴</Text>
              </TouchableOpacity>
        </View>

          <View style={styles.footer}>

          </View>

        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',  // 수정된 반투명 배경
  },
  modalView: {
    marginTop: '-40%',
    height: '50%',
    width: '92.5%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },


  header: {
    flex: '1.5',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.7,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 2,
  },
  headerBottom: {
    flex: 1,
  },
  emailText: {
    fontSize: 15,
  },
  closeButton: {
    position: 'absolute',
    padding: 10,
    left: '45%',
    top: 0,
  },

  body: {
    marginTop: 10,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.7
  },
  menu:{
    flexDirection: 'row',
    width: '100%',
    marginLeft: 10,
    padding: 12,
    marginBottom: 7.5,
  },
  menuText: {
    marginLeft: 10,
  },
  footer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default ProfileModal;
