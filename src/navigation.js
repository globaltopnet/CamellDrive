import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FileScreen from '../screens/FileScreen';
import PlusMenu from '../screens/PlusMenu';
import MediaScreen from '../screens/MediaScreen';
import { Ionicons } from '@expo/vector-icons';
import CustomHeader from './CustomHeader';
import SearchBar from './SearchBar';
import { Colors } from '../theme/color';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreenHeader = ({ title, navigation }) => {
    return (
      <>
        <CustomHeader title={title} navigation={navigation} />
        <SearchBar onSearch={(query) => console.log('Searching for:', query)} />
      </>
    );
  };

// 하단 탭 네비게이션 설정
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getIconName(route.name, focused); // 탭 아이콘 이름 동적 할당
          if (route.name === 'Plus') return <PlusMenu />; // 플러스 메뉴는 특별한 아이콘(컴포넌트)
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
          headerTitle: '추가 기능',
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

// 주 네비게이션 컨테이너 설정
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerShown: false // 스택의 모든 헤더를 숨깁니다
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

// 탭 이름에 따른 아이콘 이름을 반환하는 함수
function getIconName(routeName, focused) {
  const iconMap = {
    File: focused ? 'document' : 'document-outline',
    Media: focused ? 'images' : 'images-outline',
  };
  return iconMap[routeName] || 'alert-circle-outline';
}

// Plus 탭 클릭 시 보여줄 기본 컴포넌트
function EmptyScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
}
