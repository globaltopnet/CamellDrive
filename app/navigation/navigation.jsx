import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import DrawerMenu from '../main/DrawerMenu';
import { NavigationContainer } from '@react-navigation/native';
import WalletScreen from '../screens/WalletScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
        <Stack.Screen
          name="Home"
          component={DrawerMenu}
          options={{
            headerShown: false
          }}
        />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;