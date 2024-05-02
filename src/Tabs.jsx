import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/color';
import FileScreen from '../screens/FileScreen';
import MediaScreen from '../screens/MediaScreen';
import PlusMenu from '../screens/PlusMenu';
import FavoriteScreen from '../screens/FavoriteScreen';
import ShareScreen from '../screens/ShareScreen';
import SlideInScreen from './SlideInScreen';
import TabScreenHeader from './TabScreenHeader';

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
      <Tab.Screen name="File" options={{ headerShown: false }}>
        {() => (
          <SlideInScreen>
            <FileScreen />
          </SlideInScreen>
        )}
      </Tab.Screen>
      <Tab.Screen name="Plus" options={{ headerShown: false, tabBarLabel: () => null }}>
        {() => (
          <SlideInScreen>
            <PlusMenu />
          </SlideInScreen>
        )}
      </Tab.Screen>
      <Tab.Screen name="Media" options={{ headerShown: false }}>
        {() => (
          <SlideInScreen>
            <MediaScreen />
          </SlideInScreen>
        )}
      </Tab.Screen>
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        tabBarButton: () => null,
        headerTitle: '즐겨찾기',
        header: ({ navigation }) => <TabScreenHeader title="즐겨찾기" navigation={navigation} />
      }} />
      <Tab.Screen name="Share" component={ShareScreen} options={{
        tabBarButton: () => null,
        headerTitle: '공유',
        header: ({ navigation }) => <TabScreenHeader title="공유" navigation={navigation} />
      }} />
    </Tab.Navigator>
  );
}

function getIconName(routeName, focused) {
  const iconMap = {
    File: focused ? 'document' : 'document-outline',
    Media: focused ? 'images' : 'images-outline',
    Plus: 'add-circle-outline',
    Favorite: 'heart-outline',
    Share: 'share-social-outline'
  };
  return iconMap[routeName] || 'alert-circle-outline';
}

export default Tabs;
