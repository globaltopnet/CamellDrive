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
import React, { useState, useEffect } from 'react';
import TronWeb from 'tronweb';
import randomBytes from 'react-native-randombytes';

WebBrowser.maybeCompleteAuthSession();

const generateRandomHex = (length) => {
  return new Promise((resolve, reject) => {
    randomBytes(length, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString('hex'));
      }
    });
  });
};

const generateTronWebInstance = async () => {
  const privateKey = await generateRandomHex(32);
  const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: privateKey
  });
  return { tronWeb, privateKey };
};

async function createTronAccount(tronWeb) {
  try {
    const account = await tronWeb.createAccount();
    return {
      address: account.address.base58,
      privateKey: account.privateKey,
    };
  } catch (error) {
    console.error('Error creating the wallet:', error);
    return null;
  }
}

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [userIsNew, setUserIsNew] = useState(null);
  const [wallet, setWallet] = useState({ address: null, privateKey: null });
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId: "795983066430-0d5a3vj9i2ncmt384icemckb714bcdqc.apps.googleusercontent.com",
    androidClientId: "795983066430-dqnfl5gkppmlvs364sb4jhemmf2c9cq4.apps.googleusercontent.com"
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const email = user.email;
          console.log('User email:', email);
xw
          // Check if the user is new via your existing API
          const apiResponse = await fetch('http://54.180.133.138:5000/api/check-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
          const apiData = await apiResponse.json();
          setUserIsNew(apiData.isNewUser);

          if (apiData.isNewUser) {
            const { tronWeb, privateKey } = await generateTronWebInstance();
            const account = await createTronAccount(tronWeb);
            if (account) {
              setWallet({ address: account.address, privateKey: privateKey });

              const walletPayload = {
                email,
                address: account.address,
                privateKey: privateKey
              };

              try {
                const apiAddResponse = await fetch('http://54.180.133.138:5000/api/add-wallet', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(walletPayload),
                });

                const apiAddData = await apiAddResponse.json();
                if (apiAddData.success) {
                  console.log('Wallet successfully added to the database.');
                } else {
                  console.error('Error adding wallet:', apiAddData.error);
                }
              } catch (error) {
                console.error('API error while adding wallet:', error);
              }
            }
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
      <Text style={defaultStyles.descriptionText}>
        Camell Drive에 오신 것을 환영합니다.
      </Text>

      {wallet.address && (
        <View>
          <Text>Wallet Address: {wallet.address}</Text>
          <Text>Wallet Private Key: {wallet.privateKey}</Text>
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
        <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Google로 계속하기</Text>
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

// iosClientId: "795983066430-0d5a3vj9i2ncmt384icemckb714bcdqc.apps.googleusercontent.com",
// androidClientId: "795983066430-dqnfl5gkppmlvs364sb4jhemmf2c9cq4.apps.googleusercontent.com"