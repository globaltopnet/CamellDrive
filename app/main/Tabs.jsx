import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Colors } from '../theme/color';
import FileScreen from '../screens/FileScreen';
import MediaScreen from '../screens/MediaScreen';
import HomeScreen from '../screens/HomeScreen';
import TabScreenHeader from './TabScreenHeader';
import FavoriteScreen from '../screens/FavoriteScreen';
import ShareScreen from '../screens/ShareScreen';
import BinScreen from '../screens/BinScreen';
import SubTabScreenHeader from './SubTabScreenHeader';

const Tab = createBottomTabNavigator();

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
      {/* 공유, 휴지통, 즐겨찾기 탭을 숨깁니다. */}
      <Tab.Screen 
        name="Share" 
        component={ShareScreen} 
        options={{
          tabBarButton: () => null, // 탭 바 버튼을 숨깁니다.
          tabBarLabel: '공유',
          headerTitle: '공유',
          header: ({ navigation }) => <TabScreenHeader title="공유" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="Bin" 
        component={BinScreen} 
        options={{
          tabBarButton: () => null, // 탭 바 버튼을 숨깁니다.
          tabBarLabel: '휴지통',
          headerTitle: '휴지통',
          header: ({ navigation }) => <TabScreenHeader title="휴지통" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="Favorite" 
        component={FavoriteScreen} 
        options={{
          tabBarButton: () => null, // 탭 바 버튼을 숨깁니다.
          tabBarLabel: '즐겨찾기',
          headerTitle: '즐겨찾기',
          header: ({ navigation }) => <TabScreenHeader title="즐겨찾기" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="File" 
        component={FileScreen} 
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          tabBarLabel: '파일',
          headerTitle: '파일',
          header: ({ navigation }) => <TabScreenHeader title="파일" navigation={navigation} />
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          headerTitle: '홈',
          header: ({ navigation }) => <SubTabScreenHeader title="홈" navigation={navigation} />
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
    Home: 'home'
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
