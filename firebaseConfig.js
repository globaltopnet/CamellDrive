import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDEMKJb1YeLgsBqe0miXZMnAaEcB4I1_Bw",
  authDomain: "camelldrive-778f3.firebaseapp.com",
  projectId: "camelldrive-778f3",
  storageBucket: "camelldrive-778f3.appspot.com",
  messagingSenderId: "867810152911",
  appId: "1:867810152911:web:6ab90c2b90a2f1ce1342ba",
  measurementId: "G-P9ZHCB171V"
};

const app = initializeApp(firebaseConfig);
// initializeAuth 함수를 사용하여 AsyncStorage를 통해 Auth 상태 유지
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Android: 867810152911-kaaho1pri8g39tgl22b7tbr6d8lqphee.apps.googleusercontent.com