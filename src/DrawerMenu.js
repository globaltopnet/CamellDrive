import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
import { Colors } from '../theme/color';

import BinScreen from '../screens/BinScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import HelpScreen from '../screens/HelpScreen';
import SettingScreen from '../screens/SettingScreen';
import ShareScreen from '../screens/ShareScreen';
import UpgradePlanScreen from '../screens/UpgradePlanScreen';
import WalletScreen from '../screens/WalletScreen';
import Tabs from './Tabs';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const rate = 30;

const DrawerMenu = () => {
  return (
    <NavigationContainer independent={true}>
    <Drawer.Navigator
      initialRouteName="Tabs"  // Tabs를 기본 화면으로 설정
      screenOptions={{
        headerShown: false
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Tabs"
        component={Tabs}
        options={{
          drawerItemStyle: { display: 'none' }  // 메뉴에서 Tabs를 숨김
        }}
      />
      <Drawer.Screen 
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          drawerLabel: '즐겨찾기',  // 메뉴 레이블 설정
          headerShown: false,
          drawerItemStyle: {display: 'none'}
        }}
      />

<Drawer.Screen 
        name="BinScreen"
        component={BinScreen}
        options={{
          drawerLabel: '휴지통',  // 메뉴 레이블 설정
          headerShown: false,
          drawerItemStyle: {display: 'none'}
          // 네비게이션 기본 헤더 숨김
        }}
      />
            <Drawer.Screen 
        name="HelpScreen"
        component={HelpScreen}
        options={{
          drawerLabel: '휴지통',  // 메뉴 레이블 설정
          headerShown: false,
          drawerItemStyle: {display: 'none'}
        }}
      />
            <Drawer.Screen 
        name="WalletScreen"
        component={WalletScreen}
        options={{
          drawerLabel: '지갑',  // 메뉴 레이블 설정
          headerShown: false,
          drawerItemStyle: {display: 'none'}
          // 네비게이션 기본 헤더 숨김
        }}
      />
            <Drawer.Screen 
        name="UpgradePlanScreen"
        component={UpgradePlanScreen}
        options={{
          drawerLabel: '플랜',  // 메뉴 레이블 설정
          headerShown: false,
          drawerItemStyle: {display: 'none'}
          // 네비게이션 기본 헤더 숨김
        }}
      />
            <Drawer.Screen 
        name="SettingScreen"
        component={SettingScreen}
        options={{
          drawerLabel: '설정',  // 메뉴 레이블 설정
          headerShown: false,
          drawerItemStyle: {display: 'none'}
          // 네비게이션 기본 헤더 숨김
        }}
      />
            <Drawer.Screen 
        name="ShareScreen"
        component={ShareScreen}
        options={{
          drawerLabel: '공유',  // 메뉴 레이블 설정
          headerShown: false,
          drawerItemStyle: {display: 'none'}
          // 네비게이션 기본 헤더 숨김
        }}
      />
      {/* 필요하다면 다른 스크린을 추가할 수 있습니다 */}
    </Drawer.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.drawerSafeArea}>
        <View style={styles.titleContainer}>
          <Image
            source={require('./img/camell_logo.png')}
            style={styles.logo}
          />
          <Text style={styles.drawerTitle}>Camell Drive</Text>
        </View>
        <DrawerItemList {...props} />


        <View style={styles.menuItem}>
        <DrawerItem
          label="지갑"
          onPress={() => props.navigation.navigate('WalletScreen')}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          )}
          style={styles.items}
        />
        <DrawerItem
  label="즐겨찾기"
  onPress={() => props.navigation.navigate('Tabs', { screen: 'Favorite' })} // 'FavoriteScreen'에서 'Favorite'으로 변경
  icon={({ color, size }) => (
    <MaterialCommunityIcons name="star" color={color} size={size} />
  )}
/>

<DrawerItem
  label="휴지통"
  onPress={() => props.navigation.navigate('Tabs', { screen: 'Bin' })} // 'BinScreen'에서 'Bin'으로 변경
  icon={({ color, size }) => (
    <MaterialCommunityIcons name="trash-can" color={color} size={size} />
  )}
/>

<DrawerItem
  label="공유"
  onPress={() => props.navigation.navigate('Tabs', { screen: 'Share' })} // 'ShareScreen'에서 'Share'으로 변경
  icon={({ color, size }) => (
    <MaterialCommunityIcons name="share" color={color} size={size} />
  )}
/>

      </View>


      <View style={styles.menuItem2}>
        <DrawerItem
          label="설정"
          onPress={() => props.navigation.navigate('SettingScreen')}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          )}
          style={styles.items}
        />

<DrawerItem
          label="고객센터"
          onPress={() => props.navigation.navigate('HelpScreen')}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="help" color={color} size={size} />
          )}
          style={styles.items}
        />


      <View style={styles.customDrawerItem}>
        <View style={styles.drawerItemHeader}>
          <MaterialCommunityIcons name="cloud" color="rgba(28, 28, 30, 0.68)" size={24} />
          <Text style={styles.drawerItemLabel}>저장공간</Text>
        </View>

        <Progress.Bar
          progress={rate / 100}
          width={250}
          height={3}
          color={Colors.themcolor}
          style={{ marginTop: 5 }}
        />
        <View style={styles.progressItems}>
          <Text style={styles.progressItemText}>10GB/30GB (30%)</Text>
          <TouchableOpacity
          style={styles.upgradeButton}
          onPress={() => props.navigation.navigate('UpgradePlanScreen')}
           >
          <Text style={styles.upgradeButtonText}>업그레이드</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    

    <View style={styles.menuItem3}>
      <DrawerItem
        label="로그아웃"
        onPress={() => alert('Link to logout')}
        icon={({ color, size }) => (
          <MaterialCommunityIcons name="logout" color={color} size={size} />
        )}
        style={styles.items}
      />
    </View>


      </SafeAreaView>
    </DrawerContentScrollView>
  );
};


const styles = StyleSheet.create({
  
  drawerSafeArea: {
    flex: 1,
  },
  drawerTitle: {
    fontSize: 20,
    margin: 10,
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    paddingLeft: 15,
    borderBottomWidth: 0.3
  },
  menuItem: {
    marginTop: 10,
    borderBottomWidth: 0.2,
  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },  
  items: {
    height: 45,
  },
  menuItem2: {
    marginTop: 15,
  },
  customDrawerItem: {
    marginTop: 2,
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    alignItems: 'center',
  },
  drawerItemHeader: {
    flexDirection: 'row',
    marginLeft: 18,
    marginRight: 155,
    marginBottom: 15,
    alignItems: 'center',
  },
  drawerItemLabel: {
    fontSize: 14,
    marginLeft: 30, // 아이콘과 텍스트 간격
    color: 'rgba(28, 28, 30, 0.68)',

  },
  progressBar: {
    width: '100%', // 전체 너비 사용
    height: 3,
  },
  progressItems: {
    flexDirection: 'row',
    marginTop: 10
  },
  progressItemText: {
    fontSize: 12,
  },
  upgradeButton: {
    backgroundColor: Colors.themcolor,
    borderRadius: 8,
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 45,
  },
  upgradeButtonText: {
    fontSize: 13,
    color: 'white',
  },


  menuItem3: {
    marginTop: 15,
  },
});

export default DrawerMenu;