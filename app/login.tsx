import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { useState } from 'react';


enum SignInType {
  Phone, Google, Apple, Kakao
}

const Page = () => {
  const [countryCode, setCountryCode] = useState('+82');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {

    }
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={80}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome Back!</Text>
        <Text style={defaultStyles.descriptionText}>
          계정과 연결된 전화번호를 입력하세요.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Country Code'
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="전화번호"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity
          style={[defaultStyles.pillButton,
          phoneNumber !== '' ? styles.enabled : styles.disabled,
          { marginBottom: 20 }]}
          onPress={() => onSignIn(SignInType.Phone)}>
            <Text style={defaultStyles.buttonText}>로그인</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray}} 
            />
            <Text style={{ color: Colors.gray, fontSize: 18 }}>또는</Text>
            <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray}} 
            />
          </View>

          <TouchableOpacity 
            onPress={() => onSignIn(SignInType.Google)}
            style={[defaultStyles.pillButton, {
            flexDirection: 'row',
            gap: 16,
            marginTop: 20,
            backgroundColor: '#E1E4EC'
          }]}>
            <Image
              source={require('@/assets/icons/google-icon.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Google로 계속하기</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => onSignIn(SignInType.Kakao)}
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
            onPress={() => onSignIn(SignInType.Apple)}
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
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  }
})

export default Page;