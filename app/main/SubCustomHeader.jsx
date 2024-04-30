import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../theme/color';
import SearchBar from './SearchBar';

const SubCustomHeader = ({ title, navigation }) => {
  const [sortType, setSortType] = useState('name');
  const [ascending, setAscending] = useState(true);
  const [viewMode, setViewMode] = useState('list');


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => console.log('Profile clicked')}>
          <Ionicons name="person-circle" size={35} color="black" />
        </TouchableOpacity>
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
});

export default SubCustomHeader;