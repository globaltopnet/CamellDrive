export { ErrorBoundary } from 'expo-router';
import Colors from '@/constants/Colors';
import { auth } from '@/firebaseConfig';
import { Ionicons } from '@expo/vector-icons';
import { onAuthStateChanged } from '@firebase/auth';
import { Link, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
      setIsLoaded(true);
      SplashScreen.hideAsync();
      if (user) {
        router.replace('/navigation/navigation');
      } else {
        router.replace('/');
      }
    });

    return () => unsubscribe();
  }, []);
    
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="login/login"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href={'/login/help'} asChild>
              <TouchableOpacity>
                <Ionicons name="help-circle-outline" size={34} color={Colors.dark} />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      <Stack.Screen name="login/help" options={{ title: 'Help', presentation: 'modal' }} />
      <Stack.Screen name="navigation/navigation" options={{ headerShown: false }} />
      <Stack.Screen 
        name="screens/ChartScreen"
        options={{
          title: '',
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
            </TouchableOpacity>
          ),
          headerLargeTitle: true,
          headerTransparent: true,
        }} 
      />
    </Stack>
  );
};

export default InitialLayout;