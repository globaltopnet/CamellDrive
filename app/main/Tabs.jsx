// Tabs.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { Colors } from '../theme/color';
import FileScreen from '../screens/FileScreen';
import MediaScreen from '../screens/MediaScreen';
import PlusMenu from '../screens/PlusMenu';
import FavoriteScreen from '../screens/FavoriteScreen';
import ShareScreen from '../screens/ShareScreen';

import TabScreenHeader from './TabScreenHeader';

const Tab = createBottomTabNavigator();

function EmptyScreen() {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
}

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
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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

const styles = StyleSheet.create({
  viewModeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  }
});

export default Tabs;