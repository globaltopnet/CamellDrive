import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { useSignUp }  from '@clerk/clerk-expo';

const Page = () => {
  const [countryCode, setCountryCode] = useState('+82');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const router = useRouter();
  const { signUp } = useSignUp();

  const onSignup = async () => {
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    try {
      await signUp!.create({
        phoneNumber: fullPhoneNumber,
      });
      router.push({ pathname: '/verify/[phone]', params: { phone: fullPhoneNumber }});
    } catch (error) {
      console.error('로그인 실패: ', error)
    }
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started!</Text>
        <Text style={defaultStyles.descriptionText}>
          전화번호를 입력해 주십시오. 인증 코드를 발송해 드리겠습니다.
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

        <Text style={defaultStyles.textLink2}>
          이미 계정이 있나요?{' '}
          <Link href={'/login'} replace asChild>
            <TouchableOpacity>
              <Text style={[defaultStyles.textLink]}>로그인</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={{ flex: 1}} />

        <TouchableOpacity
          style={[defaultStyles.pillButton,
          phoneNumber !== '' ? styles.enabled : styles.disabled,
          { marginBottom: 20 }]}
          onPress={onSignup}>
            <Text style={defaultStyles.buttonText}>회원가입</Text>
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