import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/screens/LandingPage';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';

export default function App() {
  return (
    <LogIn/>
  );
}
//Test
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
