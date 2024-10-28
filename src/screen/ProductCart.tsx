import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import ListProductsCart from '../components/ListProductsCart';
import { IProductCartProps } from '../types/types';


export default function ProductCart({ route, navigation }: IProductCartProps) {
    return (
        <View style= { styles.container }>
            <View style= { styles.areaTitle }>
                <Text  style= { styles.title }>Listagem de produtos</Text>
            </View>

            <FlatList
                data={route.params.productsInCar}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ListProductsCart item={item} />
                )}
                ListFooterComponent={
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Checkout', { productsInCar: route.params.productsInCar })}
                        >
                            <View style={styles.areaTitle}>
                                <Text style={styles.title}>Finalizar compra</Text>

                                <Text>
                                Total: R$ {route.params.productsInCar.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                       
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    areaTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    areaCar: {
        position: 'absolute',
        top: 10,
        left: 14,
        fontSize: 14,
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    car: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});