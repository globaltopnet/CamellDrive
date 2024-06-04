import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDEMKJb1YeLgsBqe0miXZMnAaEcB4I1_Bw",
  authDomain: "camelldrive-778f3.firebaseapp.com",
  projectId: "camelldrive-778f3",
  storageBucket: "camelldrive-778f3.appspot.com",
  messagingSenderId: "867810152911",
  appId: "1:867810152911:web:491283e82c1f4fae1342ba",
  measurementId: "G-L8LFJEWR9F"
};

const app = initializeApp(firebaseConfig);
// initializeAuth 함수를 사용하여 AsyncStorage를 통해 Auth 상태 유지
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});