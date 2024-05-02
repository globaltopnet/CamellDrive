import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import "react-native-gesture-handler";
import * as React from 'react';
import { defaultStyles } from '@/constants/Styles';
import { auth } from "../../firebaseConfig";
import {
GoogleAuthProvider,
onAuthStateChanged,
signInWithCredential,
} from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

const Page = () => {
  const [loading, setLoading] = React.useState(false);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId: "795983066430-0d5a3vj9i2ncmt384icemckb714bcdqc.apps.googleusercontent.com",
    androidClientId: "795983066430-dqnfl5gkppmlvs364sb4jhemmf2c9cq4.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      setLoading(true);
      signInWithCredential(auth, credential)
        .catch(error => {
          console.error("Authentication error: ", error);
        })
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
      <Text style={defaultStyles.descriptionText}>
        Camell Drive에 오신 것을 환영합니다.
      </Text>

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
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Google로 계속하기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[defaultStyles.pillButton, {
          flexDirection: 'row',
          gap: 16,
          marginTop: 20,
          backgroundColor: '#F6F60A'
        }]}>
        <Image
          source={require('@/assets/icons/kakao-icon.png')}
          style={{ width: 24, height: 24 }}
        />
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Kakao로 계속하기</Text>
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
        />
        <Text style={[defaultStyles.buttonText2, { color: '#FFF' }]}>Apple로 계속하기</Text>
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

export default Page;
