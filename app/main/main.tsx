import { signOut } from '@firebase/auth'
import { auth } from '../../firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, Button } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View>
      <Text>Main</Text>
      <Button
        title="Sign Out"
        onPress={async () => {
          await signOut(auth);
          await AsyncStorage.removeItem("@user");
        }}
      />
    </View>
  )
}

export default Main