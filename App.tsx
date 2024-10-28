import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './src/screen/Product';
import ProductCart from './src/screen/ProductCart';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Produtos" 
                component={Product} 
            />
            <Stack.Screen 
                name="Carrinho" 
                component={ProductCart} 
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
