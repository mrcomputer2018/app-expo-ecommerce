import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './src/screen/Product';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Produtos" 
                component={Product} 
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
