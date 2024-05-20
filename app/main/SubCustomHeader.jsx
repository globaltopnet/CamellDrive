import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/color';
import SearchBar from './SearchBar';
import ProfileModal from '../screens/ProfileModal';
import { getAuth } from "firebase/auth";

const CustomHeader = ({ title, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);  // Modal visibility
  const [sortType, setSortType] = useState('name');
  const [ascending, setAscending] = useState(true);
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserPhoto(currentUser.photoURL);
    }
  }, []);

  const toggleSortType = (type) => {
    if (type === sortType) {
      setAscending(!ascending);
    } else {
      setSortType(type);
      setAscending(false);
    }
  };

  const getIcon = (type) => {
    return type === sortType ? (ascending ? 'chevron-up-outline' : 'chevron-down-outline') : 'chevron-up-outline';
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={30} color="black" marginRight={52.5} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.homeandpro}>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={27} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {userPhoto ? (
            <Image source={{ uri: userPhoto }} style={styles.profilePicture} />
          ) : (
            <Ionicons name="person-circle" size={35} color="black" />
          )}
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.controlsContainer}>
        <ProfileModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.background,
  },
  headerContainer: {
    marginTop: Platform.select({
      android: 24,  // 안드로이드의 경우 marginTop을 24로 설정
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  sortOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20, // 좌우 마진을 증가
    fontSize: 10,
  },
  sortButtonText: {
    marginRight: 5,
    fontSize: 12,
  },
  viewModeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },

  homeButton: {
    marginRight: 20,
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  homeandpro:{
    alignItems: 'center',
    flexDirection: 'row',
  }
});

export default CustomHeader;