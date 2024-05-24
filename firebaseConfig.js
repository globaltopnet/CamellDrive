import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyASYOIlG-BPYl7G_XBq1w_yaIbarBoqU38",
  authDomain: "camelldrive-c5fa6.firebaseapp.com",
  projectId: "camelldrive-c5fa6",
  storageBucket: "camelldrive-c5fa6.appspot.com",
  messagingSenderId: "795983066430",
  appId: "1:795983066430:web:bd7ceeab6b25db95ece86f"
};

const app = initializeApp(firebaseConfig);
// initializeAuth 함수를 사용하여 AsyncStorage를 통해 Auth 상태 유지
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});


// iOS 클리언트 ID 795983066430-0d5a3vj9i2ncmt384icemckb714bcdqc.apps.googleusercontent.com
// Android 클리언트 ID 795983066430-dqnfl5gkppmlvs364sb4jhemmf2c9cq4.apps.googleusercontent.com