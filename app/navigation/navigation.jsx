import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import DrawerMenu from '../main/DrawerMenu';
import WalletScreen from '../screens/WalletScreen';
import DepositScreen from '../screens/DepositScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen
        name="Home"
        component={DrawerMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="DepositScreen" component={DepositScreen} />
    </Stack.Navigator>
  );
}
export default Navigation;
