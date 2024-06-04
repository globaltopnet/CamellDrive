import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import "react-native-gesture-handler";
import { defaultStyles } from '@/constants/Styles';
import { auth } from "../../firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    webClientId: '867810152911-vfhigfejetbu3lqr2fe7e4d0c1hcm013.apps.googleusercontent.com',
    androidClientId: '867810152911-kaaho1pri8g39tgl22b7tbr6d8lqphee.apps.googleusercontent.com',
  });
  const handleSubmit = () => {
    alert('to be updated');
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      setLoading(true);
      signInWithCredential(auth, credential)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const email = user.email;
          await AsyncStorage.setItem('userEmail', email);
          try {
            const response = await fetch('http://13.124.248.7:8080/api/create-wallet', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (data.success) {
              setWalletAddress(data.walletAddress);
              console.log('Wallet created with address:', data.walletAddress);
            } else {
              console.error('Error creating wallet:', data.error);
            }
          } catch (error) {
            console.error('API error:', error);
          }
        })
        .catch((error) => console.error("Firebase auth error: ", error))
        .finally(() => setLoading(false));
    }
  }, [response]);

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
      {/* <Text style={defaultStyles.descriptionText}>
        Camell Drive에 오신 것을 환영합니다.
      </Text> */}

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
        onPress={() => promptAsync()}
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
