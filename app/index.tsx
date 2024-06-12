import React, { useEffect, useState } from 'react';
import Colors from '../constants/Colors';
import { defaultStyles } from '../constants/Styles';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Link, SplashScreen } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const Main = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
          // 자동 로그인 상태라면 홈 화면으로 이동
          router.replace('/navigation/navigation');
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error checking login status', error);
        setLoading(false);
      }
    };

    checkUserLoggedIn();
    SplashScreen.hideAsync();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {assets && (
        <Video 
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }} 
          style={styles.video}
          resizeMode={ResizeMode.COVER} 
        />
      )}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>
          Camell
        </Text>
        <Text style={styles.header}>
          Drive
        </Text>
        <Text style={styles.header2}>
          Cloud Storage
        </Text>
        <Text style={styles.header2}>
          Platform
        </Text>
      </View>
      <View style={styles.buttons}>
        <Link href={'/login/login'} style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.primary }]} asChild>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '900' }}>Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    fontSize: 62,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white'
  },
  header2: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Main;
