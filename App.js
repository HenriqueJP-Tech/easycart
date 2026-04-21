import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content"/>
    </NavigationContainer>
  );
}

