import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';

const files = [
  { id: '1', name: '사진.png', type: 'file', uploadDate: '2024-05-10', size: '2MB' },
  { id: '2', name: '폴더', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '3', name: '사진.png', type: 'file', uploadDate: '2024-05-10', size: '2MB' },
  { id: '4', name: '폴더', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '5', name: '사진.png', type: 'file', uploadDate: '2024-05-10', size: '2MB' },
  { id: '6', name: '사진.png', type: 'file', uploadDate: '2024-05-10', size: '2MB' },
  { id: '7', name: '사진.png', type: 'file', uploadDate: '2024-05-10', size: '2MB' },
  { id: '8', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '9', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '10', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '11', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '12', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '13', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '14', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '15', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '16', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '17', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '18', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '19', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '20', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '21', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '22', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '23', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '24', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '25', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '26', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '27', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },
  { id: '28', name: '사진.png', type: 'folder', uploadDate: '2024-05-10', size: '2MB' },

];

export default function GridView() {
  const [numColumns, setNumColumns] = useState(4);  // Assume 4 columns by default

  const renderFileItem = ({ item }) => (
<View style={styles.fileItem}>
    <Ionicons
      name={item.type === 'folder' ? 'folder' : 'document-text'}
      size={50}
      color={item.type === 'folder' ? '#d54d84' : Colors.themcolor}  // Gold for folders, blue for files
      style={{opacity: 0.8}}
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
    <FlatList
      data={files}
      renderItem={renderFileItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      key={numColumns}  // Key prop depends on numColumns
      contentContainerStyle={styles.grid}
      style={{backgroundColor: Colors.background}}
      ListEmptyComponent={<Text style={styles.emptyText}>Empty</Text>}
    />
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
    alignItems: 'center',
    margin: 10,
    width: `${100 / 4}%`,  // Adjust width based on numColumns
  },
  fileName: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
  },
});