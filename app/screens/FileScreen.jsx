import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import PlusMenu from '../screens/PlusMenu';

const files = [
  { id: '1', name: 'Logo.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '2', name: 'Logo.png', type: 'file', uploadDate: '2024-05-10', size: '2MB' },
  { id: '3', name: 'Logo.png', type: 'file', uploadDate: '2024-05-10', size: '2MB' },


];

export default function GridView() {
  const [numColumns, setNumColumns] = useState(4);

  const renderFileItem = ({ item }) => (
    <View style={styles.fileItem}>
      <Ionicons
        name={item.type === 'folder' ? 'folder' : 'document-text'}
        size={50}
        color={item.type === 'folder' ? '#d54d84' : Colors.themcolor}
        style={{ opacity: 0.8 }}
      />

      <Text style={styles.fileName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => showMenu(item.name)}
      >
        <Ionicons name="ellipsis-vertical" size={15} color="#000" />
      </TouchableOpacity>
    </View>
    
  );

  const showMenu = (fileName) => {
    Alert.alert("File Menu", `Actions for ${fileName}`, [
      { text: '공유', onPress: () => console.log('Share') },
      { text: '즐겨찾기에 추가', onPress: () => console.log('Add to Favorites') },
      { text: '휴지통으로 이동', onPress: () => console.log('Move to Trash') },
      { text: '이름 변경', onPress: () => console.log('Rename') },
      { text: '취소', onPress: () => console.log('Cancel'), style: 'cancel' },
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <FlatList
        data={files}
        renderItem={renderFileItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        key={numColumns}
        contentContainerStyle={styles.grid}
        style={{ backgroundColor: Colors.background }}
        ListEmptyComponent={<Text style={styles.emptyText}>Empty</Text>}
      />
      <PlusMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  fileItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,  // 각 아이템의 높이를 고정합니다.
    maxWidth: '25%',  // 한 줄에 4개씩 맞추기 위해 25%로 설정합니다.
    borderRadius: 10,
  },
  fileName: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: 5,
    right: 11,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
  },
});
