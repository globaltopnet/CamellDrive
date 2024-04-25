import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'; // StyleSheet를 여기로 옮기기
import { Ionicons } from '@expo/vector-icons'; // 여기서 Ionicons만 임포트
import { Colors } from '../theme/color';
import CustomHeader from './CustomHeader';
import SearchBar from './SearchBar';
import FileScreen from '../screens/FileScreen';
import MediaScreen from '../screens/MediaScreen';
import PlusMenu from '../screens/PlusMenu';

const Tab = createBottomTabNavigator();

function EmptyScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
}

const TabScreenHeader = ({ title, navigation }) => {
  const [viewMode, setViewMode] = useState('list'); // 초기 보기 모드는 리스트로 설정

  return (
    <>
      <CustomHeader title={title} navigation={navigation} />
    </>
  );
};

export { TabScreenHeader };

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getIconName(route.name, focused);
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: Colors.themcolor,
      })}
    >
      <Tab.Screen 
        name="File" 
        component={FileScreen} 
        options={{
          tabBarLabel: '파일',
          header: ({ navigation }) => <TabScreenHeader title="파일" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="FavoriteScreen" 
        component={FavoriteScreen} 
        options={{
          tabBarLabel: '즐겨찾기',
          header: ({ navigation }) => <TabScreenHeader title="즐겨찾기" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="BinScreen" 
        component={BinScreen} 
        options={{
          tabBarLabel: '휴지통',
          header: ({ navigation }) => <TabScreenHeader title="휴지통" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="ShareScreen" 
        component={ShareScreen} 
        options={{
          tabBarLabel: '공유',
          header: ({ navigation }) => <TabScreenHeader title="공유" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="Media" 
        component={MediaScreen} 
        options={{
          tabBarLabel: '미디어',
          header: ({ navigation }) => <TabScreenHeader title="미디어" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="Plus" 
        component={EmptyScreen} 
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          header: ({ navigation }) => <TabScreenHeader title="추가기능" navigation={navigation} />
        }}
      />
    </Tab.Navigator>
  );
}

function getIconName(routeName, focused) {
  const iconMap = {
    File: focused ? 'document' : 'document-outline',
    Favorite: focused ? 'star' : 'star-outline',
    Bin: focused ? 'trash-can' : 'trash-can-outline',
    Share: focused ? 'share' : 'share-outline',
    Media: focused ? 'images' : 'images-outline',
    Plus: 'add-circle-outline'
  };
  return iconMap[routeName] || 'alert-circle-outline';
}


const styles = StyleSheet.create({
  viewModeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  }
});

export default Tabs;
