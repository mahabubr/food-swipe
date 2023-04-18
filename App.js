import { NavigationContainer } from '@react-navigation/native';
import LoginRoute from './routes/LoginRoute/LoginRoute';

import 'react-native-gesture-handler';

import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { CLERK_PUBLISHABLE_KEY } from '@env'
import HomeRoute from './routes/HomeRoute/HomeRoute';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerShown: false
        }}>
          <Stack.Group>
            <Stack.Screen component={HomeRoute} name='Home' />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen component={LoginRoute} name='Login' />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ClerkProvider>
  );
}