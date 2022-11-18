
import { StyleSheet, View } from 'react-native';
import MyStack from './src/Navigation/Navigation';
import Home from './src/Screens/home';
import Splash from './src/Screens/splash';

export default function App() {
  return (
    <View style={styles.container}>
   <MyStack/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
