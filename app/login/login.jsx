import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import "react-native-gesture-handler";
import { defaultStyles } from '@/constants/Styles';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const router = useRouter();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '867810152911-4hasdjhkb07cs7c6aui6g2s9n7b5l6sb.apps.googleusercontent.com',
    });
    WebBrowser.maybeCompleteAuthSession();
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      setLoading(true);
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      const user = userCredential.user;
      const email = user.email;
      console.log('user Email is: ', email);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('isLoggedIn', 'true'); // Save login status
      try {
        const response = await fetch('http://13.124.248.7:8080/api/create-wallet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        console.log('API response', data);
        if (data.success) {
          setWalletAddress(data.walletAddress);
          console.log('Wallet created with address: ', data.walletAddress);
          router.replace('/navigation/navigation');
        } else {
          console.error('Failed to create wallet', data.error);
        }
      } catch (error) {
        console.error('API error', error);
      }
    } catch (error) {
      console.error('Google login error', error);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = () => {
    alert('to be updated');
  };

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome Back to</Text>
      <Text style={defaultStyles.logo}>Camell Drive</Text>

      {walletAddress && (
        <View>
          <Text>Wallet Address: {walletAddress}</Text>
        </View>
      )}

      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <TouchableOpacity
        style={[defaultStyles.pillButton, {
          flexDirection: 'row',
          gap: 16,
          marginTop: 20,
          backgroundColor: '#E1E4EC'
        }]}
        onPress={onGoogleButtonPress}
      >
        <Image
          source={require('@/assets/icons/google-icon.png')}
          style={{ width: 24, height: 24 }}
        />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[defaultStyles.pillButton, {
          flexDirection: 'row',
          gap: 16,
          marginTop: 20,
          backgroundColor: '#F6F60A'
        }]}
        onPress={handleSubmit}>
        <Image
          source={require('@/assets/icons/kakao-icon.png')}
          style={{ width: 24, height: 24 }}
        />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Sign in with Kakao</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[defaultStyles.pillButton, {
          flexDirection: 'row',
          gap: 16,
          marginTop: 20,
          backgroundColor: '#000000'
        }]}>
        <Image
          source={require('@/assets/icons/apple-icon.png')}
          style={{ width: 25, height: 25 }}
          onPress={handleSubmit}
        />
        <Text style={[defaultStyles.buttonText2, { color: '#FFF' }]}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    marginTop: 40,
    marginBottom: 40,
    width: 200,
    height: 200,
  },
});

export default LoginPage;
