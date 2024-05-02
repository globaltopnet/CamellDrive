export { ErrorBoundary } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const router = useRouter();
    
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
      <Stack.Screen name="main/CustomHeader" options={{ headerShown: false }}/>
    </Stack>
  );
};

export default InitialLayout;