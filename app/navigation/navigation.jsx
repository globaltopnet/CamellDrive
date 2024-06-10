import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import DrawerMenu from '../main/DrawerMenu';
import WalletScreen from '../screens/WalletScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={DrawerMenu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;
