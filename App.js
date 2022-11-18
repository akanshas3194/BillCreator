
import { StyleSheet, View } from 'react-native';
import Home from './src/Screens/home';
import Splash from './src/Screens/splash';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      {/* <Splash/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
