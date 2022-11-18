import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/home';
import Splash from '../Screens/splash';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Sp" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;