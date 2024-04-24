// src/Tabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, View } from '@expo/vector-icons';

import { Colors } from '../theme/color';
import CustomHeader from './CustomHeader';
import SearchBar from './SearchBar';
import FileScreen from '../screens/FileScreen';
import MediaScreen from '../screens/MediaScreen';
import PlusMenu from '../screens/PlusMenu';

const Tab = createBottomTabNavigator();

// Plus 탭 클릭 시 보여줄 기본 컴포넌트
function EmptyScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
}

const TabScreenHeader = ({ title, navigation }) => {
  return (
    <>
      <CustomHeader title={title} navigation={navigation} />
      <SearchBar onSearch={(query) => console.log('Searching for:', query)} />
    </>
  );
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Plus') return <PlusMenu />;
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
          headerTitle: '파일',
          header: ({ navigation }) => <TabScreenHeader title="파일" navigation={navigation} />
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
      <Tab.Screen 
        name="Media" 
        component={MediaScreen} 
        options={{
          tabBarLabel: '미디어',
          headerTitle: '미디어 라이브러리',
          header: ({ navigation }) => <TabScreenHeader title="미디어" navigation={navigation} />
        }}
      />
    </Tab.Navigator>
  );
}

function getIconName(routeName, focused) {
  const iconMap = {
    File: focused ? 'document' : 'document-outline',
    Media: focused ? 'images' : 'images-outline',
    Plus: 'add-circle-outline'
  };
  return iconMap[routeName] || 'alert-circle-outline';
}

export default Tabs;