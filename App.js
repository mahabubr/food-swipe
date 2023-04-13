import { NavigationContainer } from '@react-navigation/native';
import LoginRoute from './routes/LoginRoute/LoginRoute';

import 'react-native-gesture-handler';


export default function App() {
  return (
    <NavigationContainer>
      <LoginRoute />
    </NavigationContainer>
  );
}