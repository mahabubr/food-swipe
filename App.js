import { NavigationContainer } from '@react-navigation/native';
import LoginRoute from './routes/LoginRoute/LoginRoute';

import 'react-native-gesture-handler';

import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { CLERK_PUBLISHABLE_KEY } from '@env'
import HomeRoute from './routes/HomeRoute/HomeRoute';
import tokenCache from './clerk/tokenCache';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CategoryItems from './screen/Home/Landing/CategoryItems/CategoryItems';
// import Item from './screen/Home/Landing/CategoryItems/Item/Item';

// const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={CLERK_PUBLISHABLE_KEY}>
      <NavigationContainer>
        <SignedIn>
          <HomeRoute />
        </SignedIn>
        <SignedOut>
          <LoginRoute />
        </SignedOut>

        {/* <Stack.Navigator initialRouteName='Login' screenOptions={{
          headerTitle: 'Food Swipe',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#576CBC',
          },
          headerTintColor: '#fff'
        }}>
          <Stack.Screen name='Category' component={CategoryItems} />
          <Stack.Screen name='Item' component={Item} />
        </Stack.Navigator> */}

      </NavigationContainer>
    </ClerkProvider>
  );
}