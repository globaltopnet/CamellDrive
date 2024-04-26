import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { defaultStyles } from '@/constants/Styles';

const Page = () => {
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
        }]}>
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
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    marginTop: 10,
    marginBottom: 10,
    width: 250, 
    height: 250,
  },
});

export default Page;
