import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/color';
import SearchBar from './SearchBar';

const CustomHeader = ({ title, navigation, onViewModeChange }) => {
  const [sortType, setSortType] = useState('name');
  const [ascending, setAscending] = useState(true);

  const toggleSortType = (type) => {
    if (type === sortType) {
      // 같은 타입을 클릭하면 오름차순/내림차순을 전환
      setAscending(!ascending);
    } else {
      // 새로운 타입을 클릭하면, 그 타입을 내림차순으로 설정하고,
      // 이전 타입은 오름차순으로 리셋됩니다.
      setSortType(type);
      setAscending(false); // 새로운 타입은 즉시 내림차순으로 설정
    }
  };
  
  
  

  const getIcon = (type) => {
    return type === sortType ? (ascending ? 'chevron-up-outline' : 'chevron-down-outline') : 'chevron-up-outline';
  };

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
      <SearchBar onSearch={(query) => console.log('Searching:', query)} />
      <View style={styles.controlsContainer}>
        <View style={styles.sortOptions}>
          <TouchableOpacity style={styles.sortButton} onPress={() => toggleSortType('name')}>
            <Text style={styles.sortButtonText}>이름</Text>
            <Ionicons name={getIcon('name')} size={15} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortButton} onPress={() => toggleSortType('date')}>
            <Text style={styles.sortButtonText}>날짜</Text>
            <Ionicons name={getIcon('date')} size={15} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortButton} onPress={() => toggleSortType('size')}>
            <Text style={styles.sortButtonText}>크기</Text>
            <Ionicons name={getIcon('size')} size={15} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.viewModeButton} onPress={onViewModeChange}>
          <Ionicons name='grid-outline' size={20} color="black" />
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
    justifyContent: 'space-around', // 공간을 균등하게 분배
    flex: 1, // 전체 사용 가능한 공간을 사용
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

export default CustomHeader;