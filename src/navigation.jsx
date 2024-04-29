import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import DrawerMenu from './DrawerMenu';
import { NavigationContainer } from '@react-navigation/native';
import WalletScreen from '../screens/WalletScreen';
import DepositScreen from '../screens/DepositScreen';


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS  // iOS 스타일 수평 슬라이드 애니메이션
      }}>
        <Stack.Screen
          name="Home"
          component={DrawerMenu}
          options={{
            headerShown: false
          }}
        />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="DepositScreen" component={DepositScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
